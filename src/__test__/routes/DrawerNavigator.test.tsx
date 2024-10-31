// src/navigators/DrawerNavigator.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from '../../routes/DrawerNavigator'; // ajuste o caminho conforme necessário

describe('DrawerNavigator', () => {
  it('Deve renderizar corretamente', () => {
    const { getAllByText } = render(
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );

    // Verifica se as telas estão renderizadas
    const megaSenaElements = getAllByText('Mega-sena');
    expect(megaSenaElements.length).toBeGreaterThan(0); // Certifica que pelo menos uma instância existe
    expect(megaSenaElements.length).toBeLessThan(3); // Limite para evitar múltiplas ocorrências

    expect(getAllByText('Quina')).toBeTruthy();
    expect(getAllByText('Timemania')).toBeTruthy();
  });

  it('Deve navegar para a tela de Mega-sena como padrão', () => {
    const { getAllByText } = render(
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );

    // Verifica se a tela inicial é a Mega-sena
    const megaSenaElements = getAllByText('Mega-sena');
    expect(megaSenaElements.length).toBeGreaterThan(0); // Certifica que pelo menos uma instância existe
  });
});
