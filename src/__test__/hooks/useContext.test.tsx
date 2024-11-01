import React, { ReactNode } from 'react';
import { render } from '@testing-library/react-native';
import { LotteryContext } from '../../contexts/LotteryContexts';
import { useLottery } from '../../hooks/useContext';
import { Text, View } from 'react-native';

// Define o tipo para os props do Wrapper, especificando que `children` pode ser qualquer nó React
interface WrapperProps {
  children: ReactNode;
}

const mockLotteryContextValue = {
  results: null,
  loading: true,
  error: null,
};

// Tipagem correta para os props, incluindo `children`
const Wrapper: React.FC<WrapperProps> = ({ children }) => (
  <LotteryContext.Provider value={mockLotteryContextValue}>
    {children}
  </LotteryContext.Provider>
);

// Componente de teste que usa o hook e exibe o valor
const TestComponent: React.FC = () => {
  const { results, loading, error } = useLottery();
  return (
    <View>
      <Text testID="loading">{loading.toString()}</Text>
      <Text testID="results">{JSON.stringify(results)}</Text>
      <Text testID="error">{JSON.stringify(error)}</Text>
    </View>
  );
};

describe('Hook useLottery', () => {
  it('Deve retornar o valor correto do contexto', () => {
    const { getByTestId } = render(
      <Wrapper>
        <TestComponent />
      </Wrapper>
    );

    // Verifica se os valores estão corretos
    expect(getByTestId('loading').props.children).toBe('true');
    expect(getByTestId('results').props.children).toBe('null');
    expect(getByTestId('error').props.children).toBe('null');
  });
});
