import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import Mortgage from '../screens/Mortgage'
import GoldLoan from '../screens/GoldLoan'
import HomeScreen from '../screens/HomeScreen'
import Billing from '../screens/Biliing';
import SearchScreen from '../screens/SearchScreen'
import MortgageAddCustomerAndroid from '../screens/MortgageAddCustomerAndroid'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import AddItemScreen from '../screens/AddItemScreen'
import AddCustomerScreen from '../screens/AddCustomerScreen';
const TabNavigator = createStackNavigator({
          Home: HomeScreen,
        Mortgage:{
          screen:Mortgage,
        },
        AddCustomer:MortgageAddCustomerAndroid,
        addCustomerScreen: AddCustomerScreen,
        saveContinue:AddItemScreen,
        GoldLoan:GoldLoan,
        Billing : Billing
});
const tabScreenConfig = {
    home : {screen: TabNavigator, navigationOptions:{

        tabBarIcon: tabInfo => {
          return (
             <MaterialCommunityIcons name="home"  color = {'#FFCA2E'}  size={26} />
          );
        },
        tabBarColor:'#F9F9F9',
      }
    },
    search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return             <MaterialCommunityIcons name="magnify" color={'#FFCA2E'} size={26}/>;
        },
        tabBarColor:'white',

      }
    }
  };

const bottomTabNav =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: '#FFCA2E',
        shifting:true,
       
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: 'black'
        }
      });

export default createAppContainer(bottomTabNav);
