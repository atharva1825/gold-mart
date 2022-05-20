import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackButton from '../components/BackButton';
import SearchButton from '../components/SearchButton';
import PlusButton from '../components/PlusButton';

const Billing=() =>{
  return (
    <View style={styles.container}>
       <View style={styles.billContainer}>
        <View style={styles.backButton}><BackButton /></View>
        <Text style={styles.billText}>Billing</Text>
        <View style={styles.searchButton}><SearchButton /></View>
      </View>    

      <Text style = {styles.subtitleRecent}>Recent Bills</Text>

      <View style={styles.billNo}>
      </View>

      <View style={styles.billNo}>
      </View>

      <View style={styles.billNo}>
      </View>

      <View style={styles.billNo}>
      </View>

      <View style={styles.billNo}>
      <View  style ={styles.PlusButton}><PlusButton /></View>

      </View>
    </View>
  );
}

Billing.navigationOptions = {
  headerShown: false
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
   marginLeft:114, 
   marginRight:34,
  },
  billContainer: {
    width:390,
    height:80, 
    flexDirection:'row',
    backgroundColor:'#fff',
  },
  billText:{
    paddingLeft:112,
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
  PlusButton:{
    marginLeft:294,
    marginTop:64,
  },

  billNo:{
    width:350,
    height:100,
    marginLeft:20,
    marginTop:10,
    backgroundColor:'#fff',
    borderRadius:10,
    marginRight:20,
  }

});
export default Billing;