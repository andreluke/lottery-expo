import React from 'react';
import { render, waitFor } from '@testing-library/react-native'; // Corrigido para a versão de React Native
import { Text } from 'react-native'; // React Native components
import { LotteryProvider, LotteryContext } from '../../contexts/LotteryContexts';
import { fetchLatestResults } from '../../services/api';


jest.mock('../../services/api', () => ({
    fetchLatestResults: jest.fn(),
}));

describe('LotteryContext', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Limpa os mocks após cada teste
    });

    it('deve carregar os resultados e definir o estado corretamente', async () => {
        const mockResponse = {
            diaDeSorte: { /* dados simulados */ },
            duplasena: { /* dados simulados */ },
            federal: { /* dados simulados */ },
            loteca: { /* dados simulados */ },
        };

        // Define o que o mock deve retornar
        (fetchLatestResults as jest.Mock).mockResolvedValueOnce(mockResponse);

        // Renderiza o LotteryProvider
        const { getByText, queryByText } = render(
            <LotteryProvider>
                <LotteryContext.Consumer>
                    {({ results, loading }) => (
                        <>
                            {loading ? <Text>Loading...</Text> : <Text>{JSON.stringify(results)}</Text>}
                        </>
                    )}
                </LotteryContext.Consumer>
            </LotteryProvider>
        );

        // Verifica se "Loading..." é exibido inicialmente
        expect(getByText(/loading/i)).toBeTruthy();

        // Espera até que os resultados sejam carregados
        await waitFor(() => {
            expect(queryByText(/loading/i)).toBeNull(); // Verifica se o "Loading..." sumiu
        });

        // Verifica se os resultados foram carregados
        expect(getByText(JSON.stringify(mockResponse))).toBeTruthy();
    });

    it('deve lidar com erros na busca dos resultados', async () => {
        // Simula um erro na requisição
        (fetchLatestResults as jest.Mock).mockRejectedValueOnce(new Error('Erro na requisição'));

        const { getByText, queryByText } = render(
            <LotteryProvider>
                <LotteryContext.Consumer>
                    {({ results, loading, error }) => (
                        <>
                            {loading && <Text>Loading...</Text>}
                            {error && <Text>{error}</Text>} {/* Exibe a mensagem de erro */}
                            {results && <Text>{JSON.stringify(results)}</Text>}
                        </>
                    )}
                </LotteryContext.Consumer>
            </LotteryProvider>
        );

        // Verifica se "Loading..." é exibido inicialmente
        expect(getByText(/loading/i)).toBeTruthy();

        // Espera até que o loading termine e o erro seja exibido
        await waitFor(() => {
            expect(queryByText(/loading/i)).toBeNull(); // "Loading" deve sumir
            expect(getByText(/Erro ao carregar resultados/i)).toBeTruthy(); // Verifica se a mensagem de erro está presente
        });
    });
});
