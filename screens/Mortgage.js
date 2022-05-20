import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import BackButton from '../components/BackButton';
import SearchButton from '../components/SearchButton';
import PlusButton from '../components/PlusButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const icon = <FontAwesome5 name={'plus'} size = {18} color= {'rgba(255, 202, 46, 1)'} />; 

const Mortgage=props =>{
  return (
    <View style={styles.container}>
       <View style={styles.MortgageContainer}>
        <View style={styles.backButton}><BackButton /></View>
        <Text style={styles.MortgageText}>Mortgage</Text>
        <View style={styles.searchButton}><SearchButton /></View>
      </View>    

      <Text style = {styles.subtitleRecent}>Recent Customer</Text>

      <View style={styles.MortgageList}>
      </View>

      <View style={styles.MortgageList}>
      </View>

      <View style={styles.MortgageList}>
      </View>

      <View style={styles.MortgageList}>
      </View>

      <View style={styles.MortgageList}>
      <View  style ={styles.plusButton}>
      <View>
        <TouchableOpacity
         onPress = {() =>{
          props.navigation.navigate({routeName:'AddCustomer'}
          )
        }}
        style={[styles.PlusButton, styles.elevation]}>
          {icon}  
      </TouchableOpacity>
      </View>
      </View>

      </View>
    </View>
  );
}

Mortgage.navigationOptions ={
    headerShown : false
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    marginTop:Platform.OS ==="android"? 35:0,
},

  backButton:{
    marginLeft:20,
    marginVertical:22,
  },
  searchButton:{
   marginTop:31,
   marginLeft:99, 
   marginRight:34,
  },
  MortgageContainer: {
    width:390,
    height:80, 
    flexDirection:'row',
    backgroundColor:'#fff',
  },
  MortgageText:{
    paddingLeft:96,
    paddingVertical:30,
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    
  },
  subtitleRecent:{
    marginLeft:20,
    marginTop:20,
    marginBottom:10,
  },
  plusButton:{
    marginLeft:294,
    marginTop:64,
  },

  MortgageList:{
    width:350,
    height:100,
    marginLeft:20,
    marginTop:10,
    backgroundColor:'#fff',
    borderRadius:10,
    marginRight:20,
  },
  PlusButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding:14,
    height:46,
    width: 46,
  },
  elevation: {
    elevation: 10,
    shadowColor: '#52006A',
  },
});
export default Mortgage;
