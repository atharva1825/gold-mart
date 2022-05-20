import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackButton from '../components/BackButton';
import SearchButton from '../components/SearchButton';
import PlusButton from '../components/PlusButton';
  
const GoldLoan=() =>{
  return (
    <View style={styles.container}>
       <View style={styles.mortgageContainer}>
        <View style={styles.backButton}><BackButton /></View>
        <Text style={styles.mortgageText}>Gold Loan</Text>
        <View style={styles.searchButton}><SearchButton /></View>
      </View>    

      <Text style = {styles.subtitleRecent}>Recent Customer</Text>

      <View style={styles.customerNames}>
      </View>

      <View style={styles.customerNames}>
      </View>

      <View style={styles.customerNames}>
      </View>

      <View style={styles.customerNames}>
      </View>

      <View style={styles.customerNames}>
      <View  style ={styles.PlusButton}><PlusButton /></View>

      </View>
    </View>
  );
}
GoldLoan.navigationOptions = {
  headerShown:false,

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    marginTop:Platform.OS ==="android"? 35:0,
    //justifyContent: 'center',
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
  subtitleRecent:{
    marginLeft:20,
    marginTop:20,
    marginBottom:10,
  },
  PlusButton:{
    marginLeft:294,
    marginTop:64,
  },

  customerNames:{
    width:350,
    height:100,
    marginLeft:20,
    marginTop:10,
    backgroundColor:'#fff',
    borderRadius:10,
    marginRight:20,


  }

});
export default GoldLoan;
