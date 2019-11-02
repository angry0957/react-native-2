/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Toast } from 'native-base';

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Alert,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Modal,
  Animated,
  ActivityIndicator
} from 'react-native';
import { TextField } from 'react-native-materialui-textfield';
import {connect} from 'react-redux'
import { firstLaunchCheck, INC, DEC } from "../actions/index";
import { withNavigation } from 'react-navigation';


class OnBoardingScreen extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this)
    this.seller = this.seller.bind(this)
  }

  login(){
    const {navigate} = this.props.navigation
    // navigate('LoginStack')
    navigate('ReferralProgramScreenStack')

  }

  seller(){
    const {navigate} = this.props.navigation;
    navigate('SellerLoginStack')
  }

  render() {

  return (

    <View style={styles.body}>
      <View style={{flex: 1/3}}>
        <Text style={styles.themeColor}>Welcome Back!</Text>
        <Text style={styles.text}>Sign in and start making more with less.</Text>  
      </View>
      <View style={{flex: 2/3, justifyContent: 'center'}}>
        <View style={styles.login}>
          <TouchableOpacity
            onPress={this.login}
          >
            <Text style={{height: 40, color: 'white', textAlignVertical: 'center', alignSelf: 'center'}}>Login</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableWithoutFeedback onPress={this.seller}>
            <Text style={{margin: 10, fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>Become a Seller</Text>
          </TouchableWithoutFeedback>
        </View>

      </View>
    </View>
  );
}  
}

const styles = StyleSheet.create({
  themeColor: {
    color: '#FF008A',
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontSize: 40,
    flexDirection: 'row',
    flex: 1
  },
  login: {
    backgroundColor: '#FF008A',
    height: 40,

  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: '20%',
    marginRight: '20%',
    textAlign: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
});
function mapStateToProps(state) {
  return {
      facebookToken: state
  }
}
const mapDispatchToEvents = (dispatch) => {
  return {
    dispatch,
    firstLaunchCheck
  };
};
export default connect(mapStateToProps, mapDispatchToEvents)(withNavigation(OnBoardingScreen))

