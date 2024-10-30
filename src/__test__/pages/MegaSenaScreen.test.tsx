import React from 'react';
import renderer from 'react-test-renderer';
import MegaSenaScreen from '../../pages/MesaSenaScreen';
import { useLottery } from '../../hooks/useContext';
import { styles } from '../../theme';
import { Text } from 'react-native';

// Mock do hook useLottery
jest.mock('../../hooks/useContext', () => ({
  useLottery: jest.fn(),
}));

describe('MegaSenaScreen', () => {
  it('deve exibir o estado de carregamento corretamente', () => {
    // Mock para simular o estado de carregamento
    (useLottery as jest.Mock).mockReturnValue({
      results: null,
      loading: true,
    });

    const tree = renderer.create(<MegaSenaScreen />).toJSON();
    
    // Verifica se o snapshot do estado de carregamento está correto
    expect(tree).toMatchSnapshot();
  });

  it('deve exibir o título da Mega-Sena', () => {
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

    const tree = renderer.create(<MegaSenaScreen />).toJSON();
    
    // Verifica se o snapshot do componente com resultados da Mega-Sena está correto
    expect(tree).toMatchSnapshot();
  });

  it('deve exibir os números corretos da loteria', () => {
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

    const component = renderer.create(<MegaSenaScreen />);
    const instance = component.root;

    // Verifica se os números corretos são exibidos no componente
    const ballNumbers = instance.findAllByType(Text).map((text) => text.props.children);
    
    expect(ballNumbers).toContain(7);
    expect(ballNumbers).toContain(12);
    expect(ballNumbers).toContain(23);
    expect(ballNumbers).toContain(34);
    expect(ballNumbers).toContain(45);
    expect(ballNumbers).toContain(56);
  });

  it('deve exibir a data correta do sorteio', () => {
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

    const component = renderer.create(<MegaSenaScreen />);
    const instance = component.root;

    const dateTextArray = instance.findByProps({ style: styles.subText }).props.children;
    
    // Corrige o teste unindo os elementos do array em uma string e removendo espaços adicionais
    const dateText = dateTextArray.join('').trim();

    expect(dateText).toBe('29 de Outubro de 2024');
  });
});
