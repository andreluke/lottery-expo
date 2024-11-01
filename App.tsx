import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LotteryProvider } from './src/contexts/LotteryContexts';
import 'react-native-gesture-handler';
import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <LotteryProvider>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </LotteryProvider>
  );
};

export default App;
