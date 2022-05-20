import React from 'react';
import { StyleSheet, Text, View,TextInput,Pressable, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const PlusButton = (props) =>{
    const icon = <FontAwesome5 name={'plus'} size = {18} color= {'rgba(255, 202, 46, 1)'} />; 
    return(
        <View>
        <TouchableOpacity
        style={[styles.PlusButton, styles.elevation]}>
          {icon}  
      </TouchableOpacity>
      </View>
    )
};
const styles = StyleSheet.create(
    {  
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
          
    },
) ;
export default PlusButton;