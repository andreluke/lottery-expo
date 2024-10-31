import { fetchLatestResults } from '../../services/api'; // ajuste o caminho conforme necessário


describe('fetchLatestResults', () => {
  it('deve buscar os últimos resultados com sucesso e verificar a estrutura', async () => {
    
    // Chama a função e verifica a resposta
    const results = await fetchLatestResults();

    // Verifica se as propriedades esperadas estão presentes
    expect(results).toHaveProperty('megasena');
    expect(results).toHaveProperty('quina');
    expect(results).toHaveProperty('timemania');
    expect(results).toHaveProperty('duplasena');
    expect(results).toHaveProperty('diaDeSorte');
  });

});
