import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableWithoutFeedback } from "react-native";
import LoginScreen from "./screens/login";
import ProductScreen from "./screens/product";
import OrderScreen from "./screens/order";
import LoginScreen2 from "./screens/login2";
import GraphScreen from "./screens/graph";
import SellerLoginScreen from "./screens/SellerLogin";
import OnBoardingScreen from "./screens/OnBoarding";
import OnBoardingScreen2 from "./screens/OnBoarding2";
import SideMenu from './screens/SideMenu'


import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  SafeAreaView,
  DrawerItems,
} from "react-navigation";




export const Navigator = createDrawerNavigator(
  {
  Home_ : createStackNavigator(
    {
      Home: { screen: ProductScreen,
        navigationOptions: ({ navigate, navigation }) => ({
          title: 'Products',
          headerLeft: (
            <TouchableWithoutFeedback
              onPress={() => navigation.openDrawer()}
            >
                <Image resizeMode={'contain'} style={{marginLeft: 10}} source={require('./assets/Menu.png')}/>
              </TouchableWithoutFeedback>
          ),  
          headerRight: (
            <Text></Text>),
          headerTitleStyle: {textAlign: 'center', flex: 1, color: 'black'},
        }),  
      },
      OrderStack : { screen: OrderScreen,
        navigationOptions: ({ navigate, navigation }) => ({
          title: 'Orders',
          headerLeft: (
            <TouchableWithoutFeedback
              onPress={() => navigation.openDrawer()}
            >
                <Image resizeMode={'contain'} style={{marginLeft: 10}} source={require('./assets/Menu.png')}/>
              </TouchableWithoutFeedback>
          ),  
          headerRight: (
            <Text></Text>),
          headerTitleStyle: {textAlign: 'center', flex: 1, color: 'black'},
        }),  
      },
    },
    {
      initialRouteName: 'Home',
      navigationOptions: () => ({
        title: 'Home',
        headerTitleStyle: { 
          textAlign:"center", 
          flex:1 
      },
        drawerIcon: () =><Image
        resizeMode={'contain'} 
                            source={require("./assets/HomeIcon.png")}
                            style={{height: 20, width: 20}}
                          />
      }),
  }
  ),
  GraphStack : { screen: GraphScreen},
},
{  
  headerLayoutPreset: 'center', // default is 'left'
  drawerBackgroundColor: "white",
  contentComponent: SideMenu,
  contentOptions: {
      activeTintColor: 'white',
      itemsContainerStyle: {
        marginVertical: 0,
      },
      activeBackgroundColor:"#024b30",
  },
  
}
);

const AuthStackNavigation = createStackNavigator({
  OnBoardingStack: { screen: OnBoardingScreen,
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },  
  },
  OnBoardingStack2: { screen: OnBoardingScreen2,
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },  
  },
  LoginStack: { screen: LoginScreen,
    headerMode: 'none',
    navigationOptions: ({ navigate, navigation }) => ({
      title: 'Home',
      headerLeft: (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('OnBoardingStack')}
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
  LoginStack2: { screen: LoginScreen2,
    headerMode: 'none',
    navigationOptions: ({ navigate, navigation }) => ({
      title: 'Home',
      headerLeft: (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('OnBoardingStack2')}
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
  HomeDrawer: Navigator,
  });
const Nav=createAppContainer(MainNavigation)

export default Nav;
