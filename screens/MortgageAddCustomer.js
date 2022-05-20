import React from 'react';
import { StyleSheet, Text, View,TextInput,Pressable } from 'react-native';
import BackButton from '../components/BackButton';
import SearchButton from '../components/SearchButton';
  const MortgageAddCustomer=()=> {
  return (
    <View style={styles.container}>
      <View style={styles.mortgageContainer}>
        <View style={styles.backButton}><BackButton /></View>
        <Text style={styles.mortgageText}>Mortgage</Text>
        <View style={styles.searchButton}><SearchButton /></View>
      </View>
      <Text style={styles.addCustom}>Add Customer</Text>
      <Text style={styles.subTitle}>Personal Details</Text>

      <View style={{ flexDirection: 'row', marginLeft: 20 }}>
        <TextInput style={styles.textInput} placeholder='first name' />
        <TextInput style={styles.textInput} placeholder='last name' />
      </View>

      <TextInput style={styles.commonInput} placeholder='phone' />
      <TextInput style={styles.commonInput} placeholder='addressline 1' />
      <TextInput style={styles.commonInput} placeholder='addressline 2' />

      <View style={{ flexDirection: 'row', marginLeft: 20 }}>
        <TextInput style={styles.textInput} placeholder='city/town' />
        <TextInput style={styles.textInput} placeholder='state' />
      </View>

      <TextInput style={styles.commonInput} placeholder='pincode' />
      <Text style={styles.subTitle}>Item Details</Text>
      <TextInput style={styles.commonInput} placeholder='item 1' />
      <TextInput style={styles.commonInput} placeholder='item 2' />

      <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>

        <Pressable style={styles.addItembutton}>
          <Text style={styles.addItemText}>Add Item</Text>
        </Pressable>
        <Pressable style={styles.savebutton}>
          <Text style={styles.savetext}>Save</Text>
        </Pressable>
      </View>

    </View>
  );
}  
MortgageAddCustomer.navigationOptions = {
  
  headerShown:false,
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'background: rgba(249, 249, 249, 1)',
    fontFamily:'Montserrat-Regular'  ,
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
  mortgageContainer: {
    width:390,
    height:80, 
    flexDirection:'row',
  },
  mortgageText:{
    paddingLeft:111,
    paddingVertical:30,
    alignItems:'center',
    
  },
  addCustom:{
    paddingTop:15,
    textAlign:'center',
    paddingBottom:15,
    paddingLeft:145,
    paddingRight:146,
    backgroundColor:'#FBFBFB',
    marginBottom:10,
  },
  subTitle:{
   paddingLeft:20,
   paddingTop:20,
  },

  textInput:{
    width:170,
    height:45,
    backgroundColor:'#fff',
    borderRadius:8,
    marginTop:10,
    marginRight:10,
    paddingLeft:15,
    paddingRight:70,
  },
  commonInput:{
    width:350,
    height:45,
    borderRadius:8,
    backgroundColor:'#fff',
    marginLeft:20,
    paddingLeft:15,
    marginTop:10,
    
  },
  savebutton:{
    width:170,
    marginLeft:10,
    height:46,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
    borderColor:'#FFCA2E',
    borderWidth:1,
    backgroundColor:'#fff'
  },
  savetext:{
    color:'#FFCA2E',
  },

  addItembutton:{
    width:170,
    height:46,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
    borderColor:'#FFCA2E',
    borderWidth:1,
    backgroundColor:'rgba(255, 202, 46, 0.6);'
  },
  addItemText:{
    color:'#333',
  }
});

export default MortgageAddCustomer;
