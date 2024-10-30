import React from 'react';
import renderer from 'react-test-renderer';
import TimemaniaScreen from '../../pages/TimemaniaScreen';
import { useLottery } from '../../hooks/useContext';
import { styles } from '../../theme';
import { Text } from 'react-native';

// Mock do hook useLottery
jest.mock('../../hooks/useContext', () => ({
  useLottery: jest.fn(),
}));

describe('TimemaniaScreen', () => {
  it('deve exibir o estado de carregamento corretamente', () => {
    // Mock para simular o estado de carregamento
    (useLottery as jest.Mock).mockReturnValue({
      results: null,
      loading: true,
    });

    const tree = renderer.create(<TimemaniaScreen />).toJSON();
    
    // Verifica se o snapshot do estado de carregamento está correto
    expect(tree).toMatchSnapshot();
  });

  it('deve exibir o título do Timemania', () => {
    // Mock para simular resultados de Mega-Sena com o estado de carregamento falso
    (useLottery as jest.Mock).mockReturnValue({
      results: {
        timemania: {
          dezenas: [9, 14, 55, 77, 2, 66, 38],
          dataPorExtenso: '29 de Outubro de 2024',
        },
      },
      loading: false,
    });

    const tree = renderer.create(<TimemaniaScreen />).toJSON();
    
    // Verifica se o snapshot do componente com resultados da Mega-Sena está correto
    expect(tree).toMatchSnapshot();
  });

  it('deve exibir os números corretos da loteria', () => {
    // Mock para simular resultados da Mega-Sena
    (useLottery as jest.Mock).mockReturnValue({
      results: {
        timemania: {
          dezenas: [9, 14, 55, 77, 2, 66, 38],
          dataPorExtenso: '29 de Outubro de 2024',
        },
      },
      loading: false,
    });

    const component = renderer.create(<TimemaniaScreen />);
    const instance = component.root;

    // Verifica se os números corretos são exibidos no componente
    const ballNumbers = instance.findAllByType(Text).map((text) => text.props.children);
    
    expect(ballNumbers).toContain(9);
    expect(ballNumbers).toContain(14);
    expect(ballNumbers).toContain(55);
    expect(ballNumbers).toContain(77);
    expect(ballNumbers).toContain(2);
    expect(ballNumbers).toContain(66);
    expect(ballNumbers).toContain(38);
  });

  it('deve exibir a data correta do sorteio', () => {
    // Mock para simular o retorno de resultados da Mega-Sena com data
    (useLottery as jest.Mock).mockReturnValue({
      results: {
        timemania: {
          dezenas: [9, 14, 55, 77, 2, 66, 38],
          dataPorExtenso: '29 de Outubro de 2024',
        },
      },
      loading: false,
    });

    const component = renderer.create(<TimemaniaScreen />);
    const instance = component.root;

    const dateTextArray = instance.findByProps({ style: styles.subText }).props.children;
    
    // Corrige o teste unindo os elementos do array em uma string e removendo espaços adicionais
    const dateText = dateTextArray.join('').trim();

    expect(dateText).toBe('29 de Outubro de 2024');
  });
});
