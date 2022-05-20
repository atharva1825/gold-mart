import React from 'react';
import { StyleSheet, Text, View,TextInput,Pressable } from 'react-native';
import BackButton from '../components/BackButton';
import SearchButton from '../components/SearchButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';




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
function MortgageAddItem() {
    return (
        <View style={styles.container}>
            <View style={styles.mortgageContainer}>
                <View style={styles.backButton}><BackButton /></View>
                <Text style={styles.mortgageText}>Mortgage</Text>
                <View style={styles.searchButton}><SearchButton /></View>
            </View>
            <Text style={styles.nameText}>Rajesh Shah</Text>
            <View style={styles.locationContainer}>
                <Text>Location</Text>
                <Text>Kolhapur</Text>
            </View>

            <Text style={styles.itemListText}>Item List</Text>

            

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

            <Collapse>
                <CollapseHeader>
                  <View>
                  <View style={styles.locationContainer}>
                <Text>Item 2</Text>
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
    );
}  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9F9F9',

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

    nameText:{
        textAlign:'center',
        paddingVertical:15,
        backgroundColor: 'rgba(255, 202, 46, 0.3)',
    },
    locationContainer:{
        width:350,
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        backgroundColor:'#fff',
        alignItems:'center',
        borderRadius:10,
        paddingHorizontal:20,
        marginTop:15,
    },
    itemListText:{
        marginLeft:20,
        marginTop:15,
        marginRight:315,
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
      itemDetails:{
        width:350,
        height:45,
        paddingTop:8,
        paddingLeft:15,
        backgroundColor:'#fff',
        marginLeft:20,
        marginTop:5,
        borderRadius:8,
      },
      itemDetailText:{
        paddingTop:5,
        paddingBottom:7,
        
      }
});
export default MortgageAddItem;