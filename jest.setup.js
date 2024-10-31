import 'react-native-gesture-handler/jestSetup';

// Para ignorar o erro durante os testes
jest.mock('react-native-gesture-handler', () => {
  const ActualGestureHandler = jest.requireActual('react-native-gesture-handler');

  return {
    ...ActualGestureHandler,
    // Adicione quaisquer mocks que você precise aqui
    default: {
      ...ActualGestureHandler.default,
      install: jest.fn(),
    },
  };
});