import React from "react";
import { StatusBar } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Routes from './src/routes'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
      <StatusBar style='light' />
      </NavigationContainer>
  );
}

