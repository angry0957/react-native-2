import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableWithoutFeedback } from "react-native";
import LoginScreen from "./screens/login";
import LoginScreen2 from "./screens/login2";
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
      LogoutHelper1: { 
        screen: LoginScreen,
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
          headerTitleStyle: {textAlign: 'center', flex: 1, color: 'black'},
        }),
       },
    Home: { screen: LoginScreen,
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
        headerTitleStyle: {textAlign: 'center', flex: 1, color: 'black'},
      }),  },
      SubCategory: { 
        screen: LoginScreen,
        navigationOptions: ({ navigate, navigation }) => ({
          headerStyle: { backgroundColor: 'white'},
          headerTitleStyle: {color: 'white', textAlign: 'center', flex: 1,},
          title: 'Sub Category List',
          headerLeft: (
            <TouchableWithoutFeedback
              onPress={() => navigation.goBack()}
            >
                <Image style={{height: 20, width: 25, marginLeft: 10}} source={require('./assets/HomeIcon.png')}/>
              </TouchableWithoutFeedback>),
          headerRight: (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Home')}
            >
                <Image style={{height: 30, width: 30, marginRight: 20}} source={require('./assets/HomeIcon.png')}/>
              </TouchableWithoutFeedback>)
        }),  
       },
       ListStack: { 
        screen: LoginScreen,
        navigationOptions: ({ navigate, navigation }) => ({
          headerStyle: { backgroundColor: 'white'},
          headerTitleStyle: {color: 'white', textAlign: 'center', flex: 1},
          title: 'Easy Rent & Sell',
          headerLeft: (
            <TouchableWithoutFeedback
              onPress={() => navigation.goBack()}
            >
                <Image style={{height: 20, width: 25, marginLeft: 10}} source={require('./assets/HomeIcon.png')}/>
              </TouchableWithoutFeedback>),
          headerRight: (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Home')}
            >
                <Image style={{height: 30, width: 30, marginRight: 20}} source={require('./assets/HomeIcon.png')}/>
              </TouchableWithoutFeedback>)
        }),  
       },
       HomeStack: { 
        screen: LoginScreen,
        navigationOptions: ({ navigate, navigation }) => ({
          headerStyle: { backgroundColor: 'white'},
          headerTitleStyle: {color: 'white', textAlign: 'center', flex: 1},
          title: 'Houses',
          headerLeft: (
            <TouchableWithoutFeedback
              onPress={() => navigation.goBack()}
            >
                <Image style={{height: 20, width: 25, marginLeft: 10}} source={require('./assets/HomeIcon.png')}/>
              </TouchableWithoutFeedback>),
          headerRight: (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Home')}
            >
                <Image style={{height: 30, width: 30, marginRight: 20}} source={require('./assets/HomeIcon.png')}/>
              </TouchableWithoutFeedback>)
        }),  
       },
       Logout: { 
        screen: LoginScreen,
        navigationOptions: ({ navigate, navigation }) => ({
          headerStyle: { backgroundColor: 'white'},
          headerTitleStyle: {color: 'white', textAlign: 'center', flex: 1,},
          title: 'Logout',
          headerLeft: (
            <TouchableWithoutFeedback
              onPress={() => navigation.goBack()}
            >
                <Image style={{height: 20, width: 25, marginLeft: 10}} source={require('./assets/HomeIcon.png')}/>
              </TouchableWithoutFeedback>),
          headerRight: (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Home')}
            >
                <Image style={{height: 30, width: 30, marginRight: 20}} source={require('./assets/HomeIcon.png')}/>
              </TouchableWithoutFeedback>)
        }),    
       },

       EditStack: { 
        screen: LoginScreen,
        navigationOptions: ({ navigate, navigation }) => ({
          headerStyle: { backgroundColor: 'white'},
          headerTitleStyle: {color: 'white', textAlign: 'center', flex: 1,},
          title: 'Edit Your Profile',
          headerLeft: (
            <TouchableWithoutFeedback
              onPress={() => navigation.goBack()}
            >
                <Image style={{height: 20, width: 25, marginLeft: 10}} source={require('./assets/HomeIcon.png')}/>
              </TouchableWithoutFeedback>),
          headerRight: (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Home')}
            >
                <Image style={{height: 30, width: 30, marginRight: 20}} source={require('./assets/HomeIcon.png')}/>
              </TouchableWithoutFeedback>)
        }),    
       },

       
       ContactDetail: { 
        screen: LoginScreen,
        navigationOptions: ({ navigate, navigation }) => ({
          headerStyle: { backgroundColor: 'white'},
          headerTitleStyle: {color: 'white', textAlign: 'center', flex: 1,},
          title: 'Contact Us',
          headerLeft: (
            <TouchableWithoutFeedback
              onPress={() => navigation.goBack()}
            >
                <Image style={{height: 20, width: 25, marginLeft: 10}} source={require('./assets/HomeIcon.png')}/>
              </TouchableWithoutFeedback>),
          headerRight: (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Home')}
            >
                <Image style={{height: 30, width: 30, marginRight: 20}} source={require('./assets/HomeIcon.png')}/>
              </TouchableWithoutFeedback>)
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
  Profile: { screen: LoginScreen },
  AdsPosting: { screen: LoginScreen },
  Pricing: { screen: LoginScreen },
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
  HomeDrawer: Navigator,
  AuthStack: AuthStackNavigation, // You will use this.props.navigation.replace('HomeDrawer') after login process.
  });
const Nav=createAppContainer(MainNavigation)

export default Nav;
