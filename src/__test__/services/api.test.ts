import { createApiService } from '../../services/api';

describe('API Service', () => {
  let mockHttpClient: any;
  let apiService: ReturnType<typeof createApiService>;

  beforeEach(() => {
    // Mock do httpClient para simular chamadas de API
    mockHttpClient = {
      get: jest.fn()
    };
    // Criar a instância do serviço com o mock
    apiService = createApiService(mockHttpClient);
  });

  test('Deve retornar dados quando feito com sucesso', async () => {
    const mockResponseData = { key: 'value' };
    mockHttpClient.get.mockResolvedValue({ data: mockResponseData });

    const result = await apiService.fetchLatestResults();

    expect(result).toEqual(mockResponseData);
    expect(mockHttpClient.get).toHaveBeenCalledWith('/home/ultimos-resultados');
  });

  test('Deve retornar um erro quando falhar', async () => {
    const mockError = new Error('Network error');
    mockHttpClient.get.mockRejectedValue(mockError);

    await expect(apiService.fetchLatestResults()).rejects.toThrow('Network error');
    expect(mockHttpClient.get).toHaveBeenCalledWith('/home/ultimos-resultados');
  });

  test('Deve retornar corretamente dados vazios', async () => {
    mockHttpClient.get.mockResolvedValue({ data: null });

    const result = await apiService.fetchLatestResults();

    expect(result).toBeNull();
    expect(mockHttpClient.get).toHaveBeenCalledWith('/home/ultimos-resultados');
  });

  test('Deve lidar com status HTTP que não sejam 200', async () => {
    const mockResponse = {
      status: 500,
      data: { error: 'Internal Server Error' }
    };
    mockHttpClient.get.mockResolvedValue(mockResponse);

    // Verifica se o serviço lida com erros de status HTTP adequadamente
    const result = await apiService.fetchLatestResults();

    expect(result).toEqual(mockResponse.data);
    expect(mockHttpClient.get).toHaveBeenCalledWith('/home/ultimos-resultados');
  });

  test('Deve não alterar dados já definidos', async () => {
    const mockResponseData = { results: [1, 2, 3], timestamp: '2024-11-01' };
    mockHttpClient.get.mockResolvedValue({ data: mockResponseData });

    const result = await apiService.fetchLatestResults();

    expect(result).toEqual(mockResponseData);
    expect(mockHttpClient.get).toHaveBeenCalledWith('/home/ultimos-resultados');
  });
});