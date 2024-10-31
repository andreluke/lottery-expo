import React from 'react';
import { render } from '@testing-library/react-native';
import QuinaScreen from '../../pages/QuinaScreen';
import { useLottery } from '../../hooks/useContext';

// Mock do hook useLottery
jest.mock('../../hooks/useContext', () => ({
  useLottery: jest.fn(),
}));

describe('QuinaScreen', () => {
  it('Deve exibir o estado de carregamento corretamente', () => {
    // Mock para simular o estado de carregamento
    (useLottery as jest.Mock).mockReturnValue({
      results: null,
      loading: true,
    });

    const { toJSON } = render(<QuinaScreen />);

    // Verifica se o snapshot do estado de carregamento está correto
    expect(toJSON()).toMatchSnapshot();
  });
  

  it('Deve exibir uma mensagem de erro quando ocorrer um erro ao buscar os resultados', () => {
    // Mock para simular um erro na busca dos resultados
    (useLottery as jest.Mock).mockReturnValue({
      results: null,
      loading: false,
      error: 'Erro ao carregar os resultados',
    });

    const { getByText } = render(<QuinaScreen />);

    // Verifica se a mensagem de erro é exibida
    const errorMessage = getByText(/Erro ao carregar os resultados/i);

    expect(errorMessage).toBeTruthy();
  });

  it('Deve exibir o título da Quina', () => {
    // Mock para simular resultados de Quina com o estado de carregamento falso
    (useLottery as jest.Mock).mockReturnValue({
      results: {
        quina: {
          dezenas: [8, 13, 52, 22, 11],
          dataPorExtenso: '29 de Outubro de 2024',
        },
      },
      loading: false,
    });

    const { getByText } = render(<QuinaScreen />);

    // Verifica se o título está presente
    expect(getByText('QUINA')).toBeTruthy(); // Altere para o título que você espera
  });

  it('Deve exibir os números corretos da loteria', () => {
    // Mock para simular resultados da Quina
    (useLottery as jest.Mock).mockReturnValue({
      results: {
        quina: {
          dezenas: [8, 13, 52, 22, 11],
          dataPorExtenso: '29 de Outubro de 2024',
        },
      },
      loading: false,
    });

    const { getAllByText } = render(<QuinaScreen />);
    
    // Verifica se os números corretos são exibidos no componente
    expect(getAllByText(/8|13|52|22|11/)).toHaveLength(5); // Verifica se todos os números são exibidos
  });

  it('Deve exibir a data correta do sorteio', () => {
    // Mock para simular o retorno de resultados da Quina com data
    (useLottery as jest.Mock).mockReturnValue({
      results: {
        quina: {
          dezenas: [8, 13, 52, 22, 11],
          dataPorExtenso: '29 de Outubro de 2024',
        },
      },
      loading: false,
    });

    const { getByText } = render(<QuinaScreen />);

    // Verifica se a data correta do sorteio está exibida
    const dateText = getByText(/29 de Outubro de 2024/i); // Usando regex corretamente

    expect(dateText).toBeTruthy();
  });
});
