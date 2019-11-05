import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import LoginScreen from "./screens/login";
import ProductScreen from "./screens/product";
import LoginScreen2 from "./screens/login2";
import SellerLoginScreen from "./screens/SellerLogin";
import OnBoardingScreen from "./screens/OnBoarding";
import PhoneAffiliateHomeScreen from "./screens/PhoneAffiliateHomeScreen";
import PhoneAffiliateCodeScreen from "./screens/PhoneAffiliateCodeScreen"
import OnBoardingScreen2 from "./screens/OnBoarding2";
import SideMenu from './screens/SideMenu'
import ForgotPasswordScreen from './e_commerce/ForgotPasswordScreen'
import ThankYouScreen from './e_commerce/ThankYouScreen'
import PlazmaScreen2 from './e_commerce/PlazmaScreen2'
import ReferralProgramScreen from './e_commerce/ReferralProgramScreen'
import OrderScreen from './e_commerce/OrderScreen'
import SettingScreen from './e_commerce/SettingsScreen'
import GeneralScreen from './e_commerce/GeneralScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


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
  PhoneAffiliateHomeScreenStack: {
    screen: PhoneAffiliateHomeScreen,
    headerMode: 'none',
    navigationOptions:({navigate, navigation}) => ({
      title: 'Home',
      headerStyle: {
        backgroundColor: '#F8F6F8',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'black',
        marginLeft: '35%',
      },
      headerLeft: (
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Image resizeMode={'contain'} style={{marginLeft: 10}} source={require('./assets/drawer.png')}/>
        </TouchableWithoutFeedback>
      ),
    }),
  },
  PhoneAffiliateCodeScreenStack: {
    screen: PhoneAffiliateCodeScreen,
    headerMode: 'none',
    navigationOptions:({navigate, navigation}) => ({
      title: 'Code',
      headerStyle: {
        backgroundColor: '#F8F6F8',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'black',
        marginLeft: '35%',

      },
      headerLeft: (
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Image resizeMode={'contain'} style={{marginLeft: 10}} source={require('./assets/drawer.png')}/>
        </TouchableWithoutFeedback>
      ),
    }),},
  OnBoardingStack2: { screen: OnBoardingScreen2,
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },
  },
  ForgotPasswordStack: { screen: ForgotPasswordScreen,
    headerMode: 'none',
    navigationOptions: ({ navigate, navigation }) => ({
      title: 'Forgot Password',
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
  SettingScreenStack: { screen: SettingScreen,
    headerMode: 'none',
    navigationOptions: ({ navigate, navigation }) => ({
      title: '',
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
  PlazmaScreen2Stack: { screen: PlazmaScreen2,
    headerMode: 'none',
    navigationOptions: ({ navigate, navigation }) => ({
      title: 'Plazma',
      headerLeft: (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('OnBoardingStack')}
        >
            <Icon name='chevron-left' size={25}  style= {{color:'white', marginLeft: 2}}/>
          </TouchableWithoutFeedback>
      ),
      headerTitleStyle: {marginLeft: '35%', flex: 1, color: 'white', fontWeight: 'bold'},
      headerStyle: {backgroundColor: 'black'},
    }),    
  },
  GeneralScreenStack: { screen: GeneralScreen,
    headerMode: 'none',
    navigationOptions: ({ navigate, navigation }) => ({
      title: '',
      headerLeft: (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('OnBoardingStack')}
        >
            <Icon name='chevron-left' size={30}  style= {{color:'black', marginLeft: 2}}/>
          </TouchableWithoutFeedback>
      ),
      headerStyle: {backgroundColor: 'White'},
    }),    
  },
  ReferralProgramScreenStack: { screen: ReferralProgramScreen,
    headerMode: 'none',
    navigationOptions: ({ navigate, navigation }) => ({
      title: '',
      headerLeft: (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('OnBoardingStack')}
        >
            <Icon name='chevron-left' size={25}  style= {{marginLeft: 2}}/>
          </TouchableWithoutFeedback>
      ),
      headerTitleStyle: {backgroundColor: 'white'},
      headerStyle: {backgroundColor: 'white'}
    }),    
  },
  OrderScreenStack: { screen: OrderScreen,
    headerMode: 'none',
    navigationOptions: ({ navigate, navigation }) => ({
      title: '',
      headerLeft: (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('OnBoardingStack')}
        >
            <Icon name='chevron-left' size={25}  style= {{marginLeft: 2}}/>
          </TouchableWithoutFeedback>
      ),
      headerTitleStyle: {backgroundColor: 'white'},
      headerStyle: {backgroundColor: 'white'}
    }),    
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
    }  
  },
  ThankYouScreenStack: { screen: ThankYouScreen,
    headerMode: 'none',
    navigationOptions: {
      header: null,
    }  
  },
})

const MainNavigation = createSwitchNavigator({
  AuthStack: AuthStackNavigation, // You will use this.props.navigation.replace('HomeDrawer') after login process.
  HomeDrawer: Navigator,
  });
const Nav=createAppContainer(MainNavigation)

export default Nav;
