import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MegaSenaScreen from '../pages/MesaSenaScreen';
import QuinaScreen from '../pages/QuinaScreen';
import TimemaniaScreen from '../pages/TimemaniaScreen';
import { TouchableOpacity, Text } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Mega-sena">
      <Drawer.Screen 
        name="Mega-sena" 
        component={MegaSenaScreen} 
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Text style={{ marginRight: 20 }}>Abrir Drawer</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen 
        name="Quina" 
        component={QuinaScreen} 
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Text style={{ marginRight: 20 }}>Abrir Drawer</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen 
        name="Timemania" 
        component={TimemaniaScreen} 
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Text style={{ marginRight: 20 }}>Abrir Drawer</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
