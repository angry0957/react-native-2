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
  Text,
} from 'react-native';
import {connect} from 'react-redux'
import { firstLaunchCheck, INC, DEC } from "../actions/index";
import { withNavigation } from 'react-navigation';


class LoginScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.body}>
        <Text>Hello World</Text>  
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
