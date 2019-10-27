import React, {Fragment, Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import {connect} from 'react-redux';
import { firstLaunchCheck, INC, DEC } from "../actions/index";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




class PhoneAffiliateHomeScreen extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
        <View style={styles.mainContainer}>
            <View style={styles.SearchBoxcontainer}>
                <Icon name='close' size={25}  style= {{color:'#505050'}}/>
                <TextInput style={styles.searchInput} placeholder='Account Name, welcome to your Account sdfsd sdfs'/>  
            </View>
            <View style={styles.accountCard}>
                <Text style={styles.accountCardText}>Create more financial security for userself each month</Text>
            </View>
            <View style={styles.accountCardBackgroud, styles.accountCard}>
                <Text style={styles.accountCardText}>Make more money on the small things</Text>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
    },
    SearchBoxcontainer: {
        flexDirection: 'row-reverse',
        backgroundColor: 'white',
        backgroundColor: '#F7F7F7',
    },
    searchInput: {
        width: '90%',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },
    accountCard: {
        backgroundColor: '#2576E8',
        borderRadius: 10,
        marginTop: 20,
        height: 400,
    },
    accountCardBackgroud: {
        backgroundColor: 'red',
    },
    accountCardText: {
        marginTop:10,
        marginLeft: 30,
        marginRight: 30,
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',

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
  export default connect(mapStateToProps, mapDispatchToEvents)(withNavigation(PhoneAffiliateHomeScreen))
  
