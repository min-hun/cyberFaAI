import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import SettingsScreen from './SettingsScreen';
import showMapScreen from './showMapScreen';
import IndoorMapScreen from './IndoorMapScreen';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Indoor"
        component={IndoorMapScreen}
        options={{
          tabBarLabel: 'Indoor',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="showMap"
        component={showMapScreen}
        options={{
          tabBarLabel: 'Map',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-map" color={color} size={26} />
          ),
        }}
      />
            <Tab.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;