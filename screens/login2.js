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
  Image,
  View,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native';
import {connect} from 'react-redux'
import { firstLaunchCheck, INC, DEC } from "../actions/index";
import { withNavigation } from 'react-navigation';


class LoginScreen2 extends Component {

  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
    
    this.state = {
      email   : '',
      password: '',
      isLoading: false,
      hidePassword: true, 
    }
  }

  login(){

  }

  change(){
    this.setState({hidePassword: !this.state.hidePassword})
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={{flex: 1/5}}>
          <Text style={{fontSize: 15, flex: 1, textAlignVertical: 'bottom', fontWeight: 'bold'}}>Login</Text>
        </View>
        <View style={{flex: 4/5, marginTop: 20}}>
          <Text>Email</Text>
          <TextInput style={{borderBottomWidth: 1, borderBottomColor: 'gray',}}/>
          <Text style={{marginTop: 30}}>Password</Text>
          <TextInput 
            secureTextEntry={this.state.hidePassword}
            value={this.state.password}
              onChangeText={ (password) => this.setState({ password }) }
          style={{borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 20}}/>
          <TouchableWithoutFeedback
            onPress={this.change}
            >
            <Image 
              source={require('../assets/EyeShape.png')}
              resizeMode={'contain'}   /* <= changed  */
              style={{tintColor: '#FF008A', alignSelf: 'flex-end', top: -50, height: 20}} />
            </TouchableWithoutFeedback>
          <View style={styles.login}>
            <TouchableOpacity
              onPress={this.login}
            >
              <Text style={{height: 40, color: 'white', textAlignVertical: 'center', alignSelf: 'center'}}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <View style={{flex: 1, marginBottom: 10, justifyContent: 'flex-end'}}>
              <Text style={{color: 'grey', fontSize: 12, textAlign: 'center'}}>Don't  have an account ?</Text>
              <Text style={{fontSize: 15, textAlign: 'center'}}>Become a associate</Text>
            </View>
          </View>
        </View>
      </View>
  );
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  login: {
    backgroundColor: '#FF008A',
    height: 40,

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
export default connect(mapStateToProps, mapDispatchToEvents)(withNavigation(LoginScreen2))
