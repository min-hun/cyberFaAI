import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Callout, Marker } from 'react-native-maps'
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps



const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    markerImage: {
      width: 35,
      height: 35,  
    },
    image:{
      width: 50,
      height:70,
    },

   });

export default class showMapScreen extends Component {
    render() {
        return (
          <SafeAreaView style={styles.container}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: 10.8543,
                longitude: 106.6261,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}>
                <Marker 
                description = "This is my company"
                coordinate ={{latitude:10.8543, longitude: 106.6261 }}
                title = "abc">

                <Image 
                style = {styles.markerImage}
                source = {require("./assets/alert.png")}/>
                <Callout style={{ flex: 1, position: 'absolute', width:100, height: 150,}} tooltip = {false}>
                  <View>
                      <View style ={styles.bubble}>
                          <Text>Nguyen Van A</Text>
                          <Text>Floor 1</Text>
                          <Text>No helmet</Text>
                          <Text><Image
                            // resizeMode="cover"
                            style= {styles.image}
                            source = {require('./assets/bellicon.png')}/></Text>
                      </View>
                      
                  </View>
                </Callout>
                </Marker>
                <Marker 
                description = "This is my company"
                coordinate ={{latitude:10.8547, longitude: 106.6258 }}
                title = "abc">
                <Image 
                style = {styles.markerImage}
                source = {require("./assets/alert.png")}/>
                <Callout style={{ flex: 1, position: 'absolute', width:100, height: 150,}} tooltip = {false}>
                  <View>
                      <View style ={styles.bubble}>
                          <Text>Nguyen Van B</Text>
                          <Text>Floor 2</Text>
                          <Text>No Vest</Text>
                          <Text><Image
                            // resizeMode="cover"
                            style= {styles.image}
                            source = {require('./assets/bellicon.png')}/></Text>
                      </View>
                  </View>
                </Callout>
                </Marker>
                <Marker 
                description = "This is my company"
                coordinate ={{latitude:10.8518,  longitude: 106.6282 }}
                title = "abc">
                <Image 
                style = {styles.markerImage}
                source = {require("./assets/alert.png")}/>
                <Callout style={{ flex: 1, position: 'absolute', width:100, height: 150,}} tooltip = {false}>
                  <View>
                      <View style ={styles.bubble}>
                          <Text>Tran Van C</Text>
                          <Text>Floor 2</Text>
                          <Text>No Vest</Text>
                          <Text>No Helmett</Text>
                          <Text><Image
                            // resizeMode="cover"
                            style= {styles.image}
                            source = {require('./assets/bellicon.png')}/></Text>
                      </View>
                      
                  </View>
                </Callout>
                </Marker>
            </MapView>
          </SafeAreaView>
        )
    }
}
