import React from 'react';
import { StyleSheet, Text, View,TextInput,Pressable } from 'react-native';
import BackButton from '../components/BackButton';
import SearchButton from '../components/SearchButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';


function AddItemScreen() {
  return (
    <View style={styles.container}>
       <Text style={styles.subTitle}>Item Details</Text>
       <TextInput style={styles.commonInput} placeholder='Item Name' />
       <TextInput style={styles.commonInput} placeholder='Weight' />
       <TextInput style={styles.commonInput} placeholder='Amount' />
       <TextInput style={styles.commonInput} placeholder='Date' />

       <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>

          <TouchableOpacity style={styles.addItembutton}>
            <Text style={styles.addItemText}>Add Item</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.savebutton}>
            <Text style={styles.savetext}>Save</Text>
          </TouchableOpacity>

          <Collapse>
                <CollapseHeader>
                  <View>
                  <View style={styles.locationContainer}>
                <Text>Item 1</Text>
                <View style = {{flexDirection:'row'}}><Circle />{icon}</View>
            </View>
                  </View>
                </CollapseHeader>
                <CollapseBody>
                <View style = {styles.itemDetails}>
                  <Text style ={{fontSize:8,color:'rgba(174, 174, 174, 1)'}}>ITEM NAME</Text>
                  <Text style = {styles.itemDetailText}>Gold Bangles</Text>
                </View>

                <View style = {styles.itemDetails}>
                  <Text style ={{fontSize:8,color:'rgba(174, 174, 174, 1)'}}>Weight</Text>
                  <Text style = {styles.itemDetailText}>100gm</Text>
                </View>

                <View style = {styles.itemDetails}>
                  <Text style ={{fontSize:8,color:'rgba(174, 174, 174, 1)'}}>Date</Text>
                  <Text style = {styles.itemDetailText}>25/04/2000</Text>
                </View>

                <View style = {styles.itemDetails}>
                  <Text style ={{fontSize:8,color:'rgba(174, 174, 174, 1)'}}>Amount</Text>
                  <Text style = {styles.itemDetailText}>50,000</Text>
                </View>
                </CollapseBody>
            </Collapse>
      </View>
      </View>

    );
  }

const icon = <FontAwesome5 name={'angle-up'} size = {20} color= {'grey'} marginRight ={26} />; 
  const Circle = () => {
    return (
        <View style={{
            height: 15,
            width: 15,
            backgroundColor: 'rgba(88, 188, 72, 0.6)',
            borderRadius: 150 / 2,
            marginRight:26,
        }}>
        </View>
    );
}

function MortgageAddCustomerAndroid(props) {
  function AddCustomerScreen() {
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
          props.navigation.navigate({routeName:'saveContinue'}
          )
        }} style={styles.saveContinue}>
          <Text style={styles.savetext}>Save and Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
    return (
        <View style={styles.container}>
            <View style={styles.mortgageContainer}>
                <View style={styles.backButton}><BackButton /></View>
                <Text style={styles.mortgageText}>Mortgage</Text>
                <View style={styles.searchButton}><SearchButton /></View>
            </View>

            <NavigationContainer>
        <Tab.Navigator initialRouteName = "Add Items">
          <Tab.Screen name="Add Customer" component={AddCustomerScreen} />
          <Tab.Screen name="Add Items" component={AddItemScreen} />
        </Tab.Navigator>
      </NavigationContainer>


        </View>
    );
}  
  MortgageAddCustomerAndroid.navigationOptions = {
    headerShown:false,
  }
  
  const Tab = createMaterialTopTabNavigator();

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
export default MortgageAddCustomerAndroid;