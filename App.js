import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './component/stack-navigator';



export default function App() {
  return (
   <NavigationContainer>
    <StackNavigator />
    <StatusBar style="dark" />
   </NavigationContainer>
  );
}

