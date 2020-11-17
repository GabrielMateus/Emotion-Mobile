import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import User from '../pages/User';
import Main from '../pages/Main';
import Relatorio from '../pages/Relatorio';
import CustomDrawer from '../components/CustomDrawer';
  
  const Drawer = createDrawerNavigator();
  
  export default function AppDrawer() {
    return (
        <Drawer.Navigator drawerContent={CustomDrawer} initialRouteName="Main">
          <Drawer.Screen name="Menu" component={Main}/>
          <Drawer.Screen name="Perfil" component={User}/>
          <Drawer.Screen name="Relatorio" component={Relatorio}/>
        </Drawer.Navigator>
      
    );
  }