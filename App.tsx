import React from 'react';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font'

import Routes from './src/routes';
import { ShopListProvider } from './src/context/ShopListContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }
  return (
    <ShopListProvider>
      <Routes />
    </ShopListProvider>
  );
}
