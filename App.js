import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import MealsFavTabNavigator from './navigation/GoldNavigator'
import MortgageAddCustomerAndroid from './screens/MortgageAddCustomerAndroid';
import AddCustomerScreen from './screens/AddCustomerScreen'
import MortgageAddItem from './screens/MortgageAddItem'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <MealsFavTabNavigator/>
  );
}