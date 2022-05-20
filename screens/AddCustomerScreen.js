import React from 'react';
import { StyleSheet, Text, View,TextInput} from 'react-native';
import BackButton from '../components/BackButton';
import SearchButton from '../components/SearchButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';

function AddCustomerScreen(props) {
  return (
    <View>
      <Text style={styles.subTitle}>Personal Details</Text>

<View style={{ flexDirection: 'row', marginLeft: 20 }}>
<TextInput style={styles.textInput} placeholder='First name' />
<TextInput style={styles.textInput} placeholder='Last name' />
</View>

<TextInput style={styles.commonInput} placeholder='Phone' />
<TextInput style={styles.commonInput} placeholder='Addressline 1' />
<TextInput style={styles.commonInput} placeholder='Addressline 2' />

<View style={{ flexDirection: 'row', marginLeft: 20 }}>
<TextInput style={styles.textInput} placeholder='City/town' />
<TextInput style={styles.textInput} placeholder='State' />
</View>
<TextInput style={styles.commonInput} placeholder='Pincode' />
<TouchableOpacity onPress = {() =>{
        props.navigation.navigate({routeName:'addCustomerScreen'}
        )
      }} style={styles.saveContinue}>
        <Text style={styles.savetext}>Save and Continue</Text>
      </TouchableOpacity>
    </View>

    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9F9F9',
      marginTop:Platform.OS ==="android"? 35:0,

      fontFamily:'Montserrat-Regular'  
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
      backgroundColor:'#fff',
    },
    mortgageText:{
      paddingLeft:111,
      paddingVertical:30,
      alignItems:'center',
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
       marginTop:20,
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
       marginTop:20,
     },
     saveContinue:{
      width:350,
      height:46,
      marginLeft:20,
      marginTop:20,
      height:46,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:8,
      borderColor:'#FFCA2E',
      borderWidth:1,
      backgroundColor:'#fff'
    },
    saveext:{
      color:'#FFCA2E',
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
      color:'black',
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
export default AddCustomerScreen;