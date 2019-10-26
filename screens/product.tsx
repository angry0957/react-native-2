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
  FlatList,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native';
import {connect} from 'react-redux'
import { firstLaunchCheck, INC, DEC } from "../actions/index";
import { withNavigation } from 'react-navigation';


class ProductScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{'id': 1}, {'id': 2},{'id': 3},{'id': 4},
            {'id': 5},{'id': 6},{'id': 7},{'id': 8},{'id': 9},
            {'id': 10},{'id': 11},{'id': 12},{'id': 13},{'id': 14},],
        }
    }

    render()
    {
        return(
            <View style={styles.body}>
                <View style={{flex: 0.1}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', flex:1, height: 30, borderColor: 'grey', borderWidth: 1, borderRadius: 40}}>
                            <View style={{flex: .1, marginTop: 5}}>
                                <Image 
                                source={require('../assets/Search.png')}
                                resizeMode={'contain'}   /* <= changed  */
                                style={{tintColor: 'grey', height: 20, width: 30}} />
                            </View>
                            <View style={{flex: .7}}>
                                <TextInput
                                    style= {{height: 30, flex: 1}}
                                />    
                            </View>
                            <View style={{flex: .2, marginTop: 5}}>
                                <Text style={{color: 'grey', marginRight: 10, textAlign: 'right'}}>Search</Text>    
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex: 0.9}}>
                    <ScrollView style={{flex: 1}}>
                    <FlatList
                        data={this.state.data}
                        horizontal={false}
                        numColumns={2}
                        renderItem={({item}) => 
                        <View key={item.id} style={{flex: 1/2, }}>
                                <View style={{height: 150, margin: 3, padding: 3, backgroundColor: '#f6f6ff'}}>
                                    <View style={{margin: 10, alignSelf: 'flex-end', backgroundColor: 'green', height:15, width: 15, borderRadius: 15/2}}>
                                    </View>
                                </View>
                                <Text style={{margin: 10, fontSize: 15, fontWeight: 'bold'}}>
                                    Product Name
                                </Text>
                        </View>} //method to render the data in the way you want using styling u need
                        />

                    </ScrollView>

                </View>
            </View>
        );
    };

}

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
  export default connect(mapStateToProps, mapDispatchToEvents)(withNavigation(ProductScreen))
  