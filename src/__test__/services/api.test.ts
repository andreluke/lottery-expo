import { fetchLatestResults } from '../../services/api'; // ajuste o caminho conforme necessário

jest.mock('../../services/api', () => ({
    fetchLatestResults: jest.fn(),
}));

describe('fetchLatestResults', () => {

  beforeEach(() => {
    jest.clearAllMocks(); // Limpa os mocks antes de cada teste
  });

  it('deve buscar os últimos resultados com sucesso e verificar a estrutura', async () => {
    // Mock da resposta da API com dados fictícios atualizados
    const mockResponse = {
      megasena: {
        acumulado: false,
        concurso: 1234,
        dataApuracao: '29/10/2024',
        dezenas: ["07", "12", "23", "34", "45", "56"], // Ajustado para strings
        valorPremio: 1000000,
        concursoEspecial: false,
        dataPorExtenso: "Terça-feira, 29 de Outubro de 2024",
        dataProximoConcurso: "31/10/2024",
      },
      quina: {
        acumulado: false,
        concurso: 5678,
        dataApuracao: '29/10/2024',
        dezenas: ["08", "13", "22", "45", "56"], // Ajustado para strings
        valorPremio: 200000,
        concursoEspecial: false,
        dataPorExtenso: "Terça-feira, 29 de Outubro de 2024",
        dataProximoConcurso: "31/10/2024",
      },
      timemania: {
        acumulado: false,
        concurso: 91011,
        dataApuracao: '29/10/2024',
        dezenas: ["01", "02", "03", "04", "05", "06", "07"], // Ajustado para strings
        valorPremio: 300000,
        concursoEspecial: false,
        dataPorExtenso: "Terça-feira, 29 de Outubro de 2024",
        dataProximoConcurso: "31/10/2024",
      },
      duplasena: {
        acumulado: true,
        concurso: 1213,
        dataApuracao: '30/10/2024',
        dezenas: ["01", "02", "03", "04", "05", "06"], // Ajustado para strings
        valorPremio: 400000,
        concursoEspecial: false,
        dataPorExtenso: "Quarta-feira, 30 de Outubro de 2024",
        dataProximoConcurso: "01/11/2024",
      },
      diaDeSorte: {
        acumulado: false,
        concurso: 1415,
        dataApuracao: '29/10/2024',
        dezenas: ["04", "05", "13", "16", "23", "25", "28"], // Ajustado para strings
        mesDaSorte: 'Abril',
        valorPremio: 500000,
        concursoEspecial: false,
        dataPorExtenso: "Terça-feira, 29 de Outubro de 2024",
        dataProximoConcurso: "31/10/2024",
        numeroDoConcurso: 982,
        quantidadeGanhadores: 1,
        tipoJogo: "DIA_DE_SORTE",
        tipoPublicacao: 3,
        valorEstimadoProximoConcurso: 150000,
      },
    };

    // Mocka a função fetchLatestResults para retornar a resposta fictícia
    (fetchLatestResults as jest.Mock).mockResolvedValue(mockResponse);

    // Chama a função e verifica a resposta
    const results = await fetchLatestResults();

    // Verifica se o retorno da função é igual ao mock
    expect(results).toEqual(mockResponse);

    // Verifica se as propriedades esperadas estão presentes
    expect(results).toHaveProperty('megasena');
    expect(results).toHaveProperty('quina');
    expect(results).toHaveProperty('timemania');
    expect(results).toHaveProperty('duplasena');
    expect(results).toHaveProperty('diaDeSorte');
  });

  it('deve tratar erros na busca dos últimos resultados', async () => {
    // Mocka a função fetchLatestResults para retornar um erro
    (fetchLatestResults as jest.Mock).mockRejectedValue(new Error('Erro na API'));

    // Chama a função e verifica se lança um erro
    await expect(fetchLatestResults()).rejects.toThrowError('Erro na API');
  });
});
