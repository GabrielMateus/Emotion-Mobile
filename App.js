import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './src/pages/Login/index'
import AppStack from './src/routes/AppStack'
import {AppLoading} from 'expo'
import {Poppins_400Regular,Poppins_600SemiBold,useFonts} from '@expo-google-fonts/poppins'
import Drawer from './src/routes/DrawerNav'

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <>
      <AppStack/>
      <StatusBar style="auto" />
    </>
  );
}

