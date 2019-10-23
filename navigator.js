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
    navigationOptions: ({ navigate, navigation }) => ({
      title: 'Easy Rent Sale',
      headerLeft: (
        <TouchableWithoutFeedback
          onPress={() => navigation.openDrawer()}
        >
            <Image resizeMode={'contain'} style={{marginLeft: 10}} source={require('./assets/left-arrow.png')}/>
          </TouchableWithoutFeedback>
      ),  
      headerRight: (
        <TouchableWithoutFeedback
          onPress={() => navigation.openDrawer()}
        >
            <Image resizeMode={'contain'} style={{marginRight: 10}} source={require('./assets/more-vertical.png')}/>
          </TouchableWithoutFeedback>),
      headerTitleStyle: {textAlign: 'center', flex: 1, color: 'white'},
    }),    
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
