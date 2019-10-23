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
import {AsyncStorage} from 'react-native';

import {
  DotIndicator,
} from 'react-native-indicators';


class SellerLoginScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  return (
    <View style={styles.body}>
      <Text>Seller Login Screen</Text>  
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
export default connect(mapStateToProps, mapDispatchToEvents)(withNavigation(SellerLoginScreen))
