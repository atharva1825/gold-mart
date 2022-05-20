import React from 'react';
import { StyleSheet, Text, View,TextInput,Pressable, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const SearchButton = () =>{
    const icon = <FontAwesome5 name={'search'} size = {22} color= {'grey'} />; 
    return(
        <View>
        <TouchableOpacity style={styles.searchButton} >
             {icon}
      </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create(
    {
        container:{
        },
        searchButton:{
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'rgba(51, 51, 51, 0.03)'
          },
    },
) ;
export default SearchButton;