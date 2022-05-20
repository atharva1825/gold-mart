import React from 'react';
import SearchScreen from './SearchScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import 'react-native-gesture-handler';
const icon = <FontAwesome5 name={'bell'} size = {18}  color= {'#333'}/>; 
const Tab = createMaterialBottomTabNavigator();
const BottomTabNav =()=> {
  return (
    <NavigationContainer>
    <Tab.Navigator labeled={true} barStyle={{ backgroundColor: 'white' }} 
activeColor="#FFCA2E" >
      <Tab.Screen name="Home" component={HomeScreen}            //Home Screen
      options={{
        tabBarIcon: (tabInfo) => {
            return <MaterialCommunityIcons name="home" color={color} size={26} />
        }
    }}/>
      <Tab.Screen name="Search" component={SearchScreen}      // Search Screen
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26}/>
        ),
    }}/>
      
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default BottomTabNav;

const HomeScreen= props => {
  return (
    <View style={styles.container}>
        <View style = {styles.headerContainer}>
            <View>
            <Text style = {styles.welcomeText}>Welcome Back,</Text>
            <Text style = {styles.nameText}>Rathod</Text>
            </View>
              <Text style = {{top:42,left:172}}> {icon}</Text>
        </View>

        <Text style = {styles.subtitleText}>Categories</Text>
        
        <TouchableOpacity onPress = {() =>{
          props.navigation.navigate({routeName:'Mortgage'}
          )
        } }><Text style = {styles.categoriesContainerText}>Mortgage</Text></TouchableOpacity>
        
        <TouchableOpacity onPress = {() =>{
          props.navigation.navigate({routeName:'GoldLoan'}
          )
        }}>
        <Text style = {styles.categoriesContainerText}>Gold Loan</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress = {() =>{
          props.navigation.navigate({routeName:'Billing'}
          )
        }}>
          <Text style = {styles.categoriesContainerText}>Billing</Text>
          </TouchableOpacity>
        <Text style = {styles.subtitleText}>Recent</Text>
        <View style = {styles.recentContainer}></View>
        <View style = {styles.recentContainer}></View>
        <View style = {styles.recentContainer}>
        </View>
    </View>
    
  );
}

HomeScreen.navigationOptions = {
  headerTitle:'Categories',
  headerShown:false,
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(249, 249, 249, 1)',
    marginTop:Platform.OS ==="android"? 35:0,
  },
  headerContainer:{
      height:100,
      width:350,
      backgroundColor:'#fff',
      marginHorizontal:20,
      marginTop:59,
      borderRadius:10,
      borderWidth:1,
      borderColor:'#FFCA2E',
      flexDirection:'row',
  },
  welcomeText:{
      paddingTop:23,
      paddingLeft:20,
      fontSize:12,
  },
  nameText:{
      fontSize:30,
      paddingLeft:21,
      paddingBottom:24,
      color:'rgba(87, 87, 87, 1)',
  },
  subtitleText:{
      marginLeft:20,
      marginTop:20,
      marginBottom:10,
  },
  categoriesContainerText:{
    paddingVertical:24,
    paddingLeft:41,
    marginTop:10,
    marginHorizontal:20,
    backgroundColor:'rgba(51, 51, 51, 1)',
    color:'#fff',
    borderRadius:10,
  },
  recentContainer:{
      width:350,
      height:70,
      backgroundColor:'#fff',
      marginHorizontal:20,
      borderRadius:10,
      marginHorizontal:20,
      marginTop:10,
  }
});