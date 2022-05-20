import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import BackButton from '../components/BackButton';


const SearchScreen=()=> {
  return (
    <View style={styles.container}>
    <View style = {styles.searchContainer}>
        <BackButton />
        <TextInput placeholder ='Search' style = {styles.searchBox}/>
    </View>

        <Text style={styles.line}>"You Do Not Have any Searches</Text>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(249, 249, 249, 1)',
    marginTop:30,
    marginTop:Platform.OS ==="android"? 35:0,

  },
  searchContainer:{
      backgroundColor:'#fff',
      width:390,
      height:80,
      flexDirection:'row',
      paddingLeft:20,
      paddingVertical:17,
  },
  searchBox:{
    marginLeft:10,
    paddingLeft:29,
    borderRadius:10,
    paddingRight:218,
    backgroundColor:'rgba(249, 249, 249, 1)',
  },
  line:{
      color:'rgba(125, 125, 125, 1)',
      marginTop:290,
      textAlign:'center',
  }
 
  
});
export default SearchScreen;
