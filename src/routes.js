import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from'@react-navigation/stack'

import login from './pages/login'
import cadastro from './pages/cadastro'
import menu from './pages/menu'
import pInicial from './pages/pInicial'



const Drawer = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="PaginaIncial" component={pInicial} />
        <Drawer.Screen name="Login" component={login} />
        <Drawer.Screen name="Cadastro" component={cadastro} />
        <Drawer.Screen name="Menu" component={menu} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}