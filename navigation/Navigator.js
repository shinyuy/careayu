import React from 'react';
import {Text} from "react-native"
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from "../screens/HomeScreen";
import Ads from "../screens/AdsScreen";
import Settings from "../screens/SettingsScreen";
import MyWebView from "../screens/MyWebView";

const HomeNavigator = createStackNavigator({
  Home: Home,
  MyWebView: MyWebView
}, {defaultNavigationOptions: {
  headerShown: false
}})

const tabsNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
    },
    Ads: {
      screen: Ads,
      navigationOptions : {
        tabBarLabel: "Ads Corner",
      }
    },
    Settings: {
      screen: Settings,
    }, 

  },
  {
    tabBarOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#ff462d'
    },
  },
);

export default createAppContainer(tabsNavigator);