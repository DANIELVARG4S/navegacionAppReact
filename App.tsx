import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

// import { StackNavigation } from './src/navigation/StackNavigation';
// import { MenuLateralBasico } from './src/navigation/MenuLateralBasico';
import { MenuLateral } from './src/navigation/MenuLateral';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigation/> */}
      {/* <MenuLateralBasico/> */}
    <MenuLateral/>
    </NavigationContainer>
  )
}
