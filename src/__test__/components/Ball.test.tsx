import React from 'react';
import renderer from 'react-test-renderer';
import { View, Text } from 'react-native'; // Importando View e Text
import Ball from '../../components/Ball'; // Atualize o caminho se necessário

describe('Ball Component', () => {
  it('Deve renderizar corretamente com suas props', () => {
    const tree = renderer.create(
      <Ball number={7} color="blue" text="white" spacing={10} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Deve aplicar corretamente os seus estilos de background e espaço', () => {
    const component = renderer.create(
      <Ball number={7} color="blue" text="white" spacing={15} />
    );
    const ballInstance = component.root.findByType(View); // Usando View de 'react-native'

    expect(ballInstance.props.style).toContainEqual({ backgroundColor: 'blue', margin: 15 });
  });

  it('Deve aplicar corretamente a cor do texto', () => {
    const component = renderer.create(
      <Ball number={7} color="blue" text="white" spacing={10} />
    );
    const textInstance = component.root.findByType(Text); // Usando Text de 'react-native'

    expect(textInstance.props.style).toContainEqual({ color: 'white' });
  });

  it('Deve apresentar corretamente o numero', () => {
    const component = renderer.create(
      <Ball number={7} color="blue" text="white" spacing={10} />
    );
    const textInstance = component.root.findByType(Text);

    expect(textInstance.props.children).toBe(7);
  });
});
