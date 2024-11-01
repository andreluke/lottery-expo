import axios, { AxiosInstance } from 'axios';

// Definimos uma função que permite a injeção da dependência do axios
export const createApiService = (httpClient: AxiosInstance) => ({
  fetchLatestResults: async () => {
    const response = await httpClient.get('/home/ultimos-resultados');
    return response.data;
  }
});

// Mantemos a implementação atual para quem já usa
export const api = axios.create({
  baseURL: 'https://servicebus2.caixa.gov.br/portaldeloterias/api',
});

export const { fetchLatestResults } = createApiService(api);
