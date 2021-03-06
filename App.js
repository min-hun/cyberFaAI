import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';

import showMapScreen from './screens/showMapScreen';
const Drawer = createDrawerNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName = "Home">
        <Drawer.Screen name = "Home" component ={MainTabScreen}/>
        {/* <Drawer.Screen name = "Details" component ={DetailsStackScreen}/> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
