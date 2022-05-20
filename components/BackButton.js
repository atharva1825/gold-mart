import React from 'react';
import { StyleSheet, Text, View,TextInput,Pressable, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const BackButton = () =>{
    const icon = <FontAwesome5 name={'angle-left'} size = {28} color= {'rgba(255, 202, 46, 1)'} />; 
    return(
        <View>
        <TouchableOpacity style={styles.backButton} >
             {icon}
      </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create(
    {
        container:{
            padding:13,
            backgroundColor:'grey',

        },
        backButton:{
            width:45,
            height:45,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:10,
            backgroundColor:'rgba(51, 51, 51, 0.03)'
          },
    },
) ;
export default BackButton;