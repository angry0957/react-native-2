import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableWithoutFeedback } from "react-native";
import LoginScreen from "./screens/login";
import SellerLoginScreen from "./screens/SellerLogin";
import OnBoardingScreen from "./screens/OnBoarding";


import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  SafeAreaView,
  DrawerItems,
} from "react-navigation";


const AuthStackNavigation = createStackNavigator({
  OnBoardingStack: { screen: OnBoardingScreen,
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },  
  },
  LoginStack: { screen: LoginScreen,
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },  
  },
  SellerLoginStack: { screen: SellerLoginScreen,
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },  
  },
  })

const MainNavigation = createSwitchNavigator({
    AuthStack: AuthStackNavigation, // You will use this.props.navigation.replace('HomeDrawer') after login process.
});
const Nav=createAppContainer(MainNavigation)

export default Nav;
