import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

function WelcomeFocus() {
  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Text style={styles.mainText}>
          Focus ERP  <Image source={require('../assets/login-logo.png')} />
        </Text>
      </View>
      <View
      style={styles.bottomContent}
      >
        <Text style={styles.bottomText}>✔ 100% safe and secure  <FontAwesome6 name="shield" size={20} color="#fff" /></Text>
      </View>
    </View>
  );
}

export default WelcomeFocus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  bottomContent: {
    alignItems: 'center',
    alignSelf:'center',
    marginBottom:30,
    paddingBottom:3,
    height:30,
    width:'80%',
    borderRadius:20,
    backgroundColor:'green'
  },
  bottomText:{color:'#fff',fontWeight:'bold',fontSize:20}
});
