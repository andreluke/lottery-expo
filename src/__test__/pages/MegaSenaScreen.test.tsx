import React from 'react';
import { render } from '@testing-library/react-native';
import MegaSenaScreen from '../../pages/MesaSenaScreen';
import { useLottery } from '../../hooks/useContext';

// Mock do hook useLottery
jest.mock('../../hooks/useContext', () => ({
  useLottery: jest.fn(),
}));

describe('MegaSenaScreen', () => {
  it('Deve exibir o estado de carregamento corretamente', () => {
    // Mock para simular o estado de carregamento
    (useLottery as jest.Mock).mockReturnValue({
      results: null,
      loading: true,
      error: null
    });

    const { toJSON } = render(<MegaSenaScreen />);
    
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

    const { getByText } = render(<MegaSenaScreen />);

    // Verifica se a mensagem de erro é exibida
    const errorMessage = getByText(/Erro ao carregar os resultados/i);

    expect(errorMessage).toBeTruthy();
  });

  it('Deve exibir o título da Mega-Sena', () => {
    // Mock para simular resultados de Mega-Sena com o estado de carregamento falso
    (useLottery as jest.Mock).mockReturnValue({
      results: {
        megasena: {
          dezenas: [7, 12, 23, 34, 45, 56],
          dataPorExtenso: '29 de Outubro de 2024',
        },
      },
      loading: false,
    });

    const { toJSON } = render(<MegaSenaScreen />);
    
    // Verifica se o snapshot do componente com resultados da Mega-Sena está correto
    expect(toJSON()).toMatchSnapshot();
  });

  it('Deve exibir os números corretos da loteria', () => {
    // Mock para simular resultados da Mega-Sena
    (useLottery as jest.Mock).mockReturnValue({
      results: {
        megasena: {
          dezenas: [7, 12, 23, 34, 45, 56],
          dataPorExtenso: '29 de Outubro de 2024',
        },
      },
      loading: false,
    });

    const { getAllByText } = render(<MegaSenaScreen />);
    
    // Verifica se os números corretos são exibidos no componente
    expect(getAllByText(/7|12|23|34|45|56/)).toHaveLength(6); // Verifica se todos os números são exibidos
  });

  it('Deve exibir a data correta do sorteio', () => {
    // Mock para simular o retorno de resultados da Mega-Sena com data
    (useLottery as jest.Mock).mockReturnValue({
      results: {
        megasena: {
          dezenas: [7, 12, 23, 34, 45, 56],
          dataPorExtenso: '29 de Outubro de 2024',
        },
      },
      loading: false,
    });
  
    const { getByText } = render(<MegaSenaScreen />);
  
    // Verifica se a data correta do sorteio está exibida
    const dateText = getByText(/29 de Outubro de 2024/i); // Usando regex corretamente
  
    expect(dateText).toBeTruthy();
  });
});