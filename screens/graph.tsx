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


class GraphScreen extends Component {

  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
    this.login = this.login.bind(this);
    
    this.state = {
      email   : '',
      password: '',
      isLoading: false,
      hidePassword: true, 
    }
  }

  login(){
    const {navigate} = this.props.navigation;
    navigate('Home')

  }

  change(){
    this.setState({hidePassword: !this.state.hidePassword})
  }

  render() {
    return (
      <View style={styles.body}>
          <Text>Hello Wordl</Text>
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
export default connect(mapStateToProps, mapDispatchToEvents)(withNavigation(GraphScreen))
