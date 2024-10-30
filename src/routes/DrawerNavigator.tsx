import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MegaSenaScreen from '../pages/MesaSenaScreen';
import QuinaScreen from '../pages/QuinaScreen';
import TimemaniaScreen from '../pages/TimemaniaScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Mega-sena">
      <Drawer.Screen name="Mega-sena" component={MegaSenaScreen} />
      <Drawer.Screen name="Quina" component={QuinaScreen} />
      <Drawer.Screen name="Timemania" component={TimemaniaScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
