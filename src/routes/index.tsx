// src/routes/index.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import DrawerNavigator from './DrawerNavigator'; // Importando o DrawerNavigator já configurado

export type RootStackParamList = {
    Home: undefined;
    Main: undefined;
  };
  
  const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
