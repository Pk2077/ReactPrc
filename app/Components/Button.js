import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../colors';

function AppButton({title,color,onPress}) {
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor:color}]} onPress={onPress} >
          <Text style={styles.text}>{title}</Text>
       </TouchableOpacity>
    );
}
const styles= StyleSheet.create({
    button:{
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        width:'100%',
        marginVertical:10
    },
    text:{
        color:Colors.white,
        fontSize:18,
        textTransform:'capitalize',
        fontWeight:'bold'
    }
})
export default AppButton;