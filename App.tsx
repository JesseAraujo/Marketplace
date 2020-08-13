import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo'

import AppStack from './src/routes/AppStack';

export default function App() {
  return (
   
    <>
     <AppStack />
     <StatusBar style="auto" />
    </>
      
     
  );
}
