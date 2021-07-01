import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  indoormap:{
    width: '100%',
    height: '70%',
  },
});
  



const IndoorMapScreen = () => {
    return (
      <View style={styles.container}>
        <ImageBackground style= {styles.indoormap}source= {require('../screens/assets/indoormap.png')}>
          <View>
          <Ionicons name="ios-body" color="#4F8EF7" size={25} style={{ position: 'absolute', top: 120, left: 50 }} />
          <Ionicons name="ios-body" color="#4F8EF7" size={25} style={{ position: 'absolute', top: 220, left: 83 }} />
          <Ionicons name="ios-body" color="#4F8EF7" size={25} style={{ position: 'absolute', top: 30, left: 58 }} />
          <Ionicons name="ios-body" color="#4F8EF7" size={25} style={{ position: 'absolute', top: 212, left: 90 }} />
          <Ionicons name="ios-body" color="#4F8EF7" size={25} style={{ position: 'absolute', top: 150, left: 30 }} />
          <Ionicons name="ios-body" color="#4F8EF7" size={25} style={{ position: 'absolute', top: 120, right: 50 }} />

          </View>
        </ImageBackground>
      </View>
    );
};

export default IndoorMapScreen;


