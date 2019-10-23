import React from "react";
import { StyleSheet, Text, View, AsyncStorage, Image, } from "react-native";
import { Root } from "native-base";
import Nav from './navigator';
/*redux components*/
import {createStore} from 'redux';
import allReducers from './reducers/index';
import {Provider,} from 'react-redux';
import {firstLaunchCheck} from './actions/index';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const store=createStore(allReducers);


export default class App extends React.Component {
  constructor(props) {
    super(props);    
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {   
    return (
      <Root>
        <Provider store={store}>
          <Nav />
        </Provider>
      </Root>
    );
  }
}
