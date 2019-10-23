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
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native';
import {connect} from 'react-redux'
import { firstLaunchCheck, INC, DEC } from "../actions/index";
import { withNavigation } from 'react-navigation';


class LoginScreen extends Component {

  constructor(props) {
    super(props);
  }

  login(){

  }

  render() {
    return (
      <View style={styles.body}>
        <View style={{flex: 1/5}}>
          <Text style={{fontSize: 15, flex: 1, textAlignVertical: 'bottom', fontWeight: 'bold'}}>Login</Text>
        </View>
        <View style={{flex: 2/5, marginTop: 20}}>
          <Text>Email</Text>
          <TextInput style={{borderBottomWidth: 1, borderBottomColor: 'gray',}}/>
          <Text style={{marginTop: 30}}>Password</Text>
          <TextInput style={{borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 20}}/>
          <View style={styles.login}>
            <TouchableOpacity
              onPress={this.login}
            >
              <Text style={{height: 40, color: 'white', textAlignVertical: 'center', alignSelf: 'center'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 3/5, flexDirection: 'column'}}>
          <View style={{flex: 1, flexDirection: 'column-reverse', marginBottom: 10}}>
            <Text style={{ textAlign: 'center', textAlignVertical: 'bottom', justifyContent: 'center'}}>Don't  have an account ?</Text>
            <Text style={{textAlign: 'center', textAlignVertical: 'bottom', justifyContent: 'center'}}>Become a seller</Text>
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
export default connect(mapStateToProps, mapDispatchToEvents)(withNavigation(LoginScreen))
