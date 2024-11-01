import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LotteryProvider } from './src/contexts/LotteryContexts';
import DrawerNavigator from './src/routes/DrawerNavigator';
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/theme';
import 'react-native-gesture-handler';
import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <LotteryProvider>
      <NavigationContainer>
      <StatusBar style="dark" backgroundColor={theme.colors.background} />
        <Routes/>
      </NavigationContainer>
    </LotteryProvider>
  );
};

export default App;
