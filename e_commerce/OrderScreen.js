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
  TextInput,
  FlatList,
  ListView
} from 'react-native';
import {connect} from 'react-redux'
import { firstLaunchCheck, INC, DEC } from "../actions/index";
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


class OrderScreen extends Component {

  constructor(props) {
    super(props);
    this.change = this.change.bind(this)
    this.login = this.login.bind(this)
    this.state = {
        data: [{'id': 1}, {'id': 2},{'id': 3},{'id': 4},
        {'id': 5},{'id': 6},{'id': 7},{'id': 8},{'id': 9},
        {'id': 10},{'id': 11},{'id': 12},{'id': 13},{'id': 14},],
    }
  }

  login(){
    const {navigate} = this.props.navigation;
    navigate('ForgotPasswordStack')
  }

  change(){
    this.setState({hidePassword: !this.state.hidePassword})
  }

  render() {
    return (
      <View style={styles.body}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
              <Icon name='instagram' size={30}/>
              <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 2}}>
                  Orders
              </Text>
          </View>
          <View style={{backgroundColor: 'grey', height: 0.5}}></View>
          <View style={{flex: 14}}>
              <ScrollView>
                  <FlatList
                    data={this.state.data}
                    horizontal={false}
                    numColumns={1}
                    renderItem={({item}) => 
                    <TouchableOpacity onPress={this.login}>
                    <View key={item.id} style={{flex: 10}}>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{height: 60, margin: 10}}>
                              <Image style={{backgroundColor: 'grey', height: '100%', width: 70,}}/>
                            </View>
                            <View style={{height: 60, marginTop: 10}}>
                                <Text style={{marginLeft: 10, fontSize: 15, fontWeight: 'bold'}}>
                                    Product Name
                                </Text>
                                <Text style={{marginLeft: 10, fontSize: 12, fontWeight: 'bold'}}>  
                                    $$$$$
                                </Text>
                            </View>
                      </View>
                      <View style={{flex: 0.2, backgroundColor: 'grey', height: 0.5, margin: 1}}>

                      </View>
                    </View> 
                    </TouchableOpacity>}
                  />
              </ScrollView>
           </View>
    </View>
  );
  }
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        flex: 1,
    }
  
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
export default connect(mapStateToProps, mapDispatchToEvents)(withNavigation(OrderScreen))
