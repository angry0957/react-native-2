import React, {Component} from 'react';
import {View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { withNavigation } from 'react-navigation';
import { firstLaunchCheck, INC, DEC } from "../actions/index";
import Icon from 'react-native-vector-icons/Feather'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons//MaterialIcons'


class GeneralScreen extends Component{
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(){
        const {navigate} = this.props.navigation;
        navigate('ThankYouScreenStack')
    }
    render(){
        return(
            <View style={{flex: 1, margin: 10, marginLeft: 20, marginRight: 20}}>
               <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                   <View style={{height: 90, width:90}}>
                        <Image style={{backgroundColor: '#ececec', height: undefined, width: undefined, flex:1}} resizeMode='contain'/>
                        <View 
                        style={{position: 'absolute', right: -10, top: -10, height: 30, width:30,borderRadius: 15, 
                        backgroundColor: '#fda1ff', alignItems: 'center', justifyContent: 'center'}}>
                            <Icon name='edit-2' style={{color: 'white'}}/>
                        </View>
                   </View>
                   <View>
                       <Text style={{fontSize: 20, marginTop: 5}}>Account Name</Text>
                   </View>
               </View>
               <View  style={{flex: 3.5}}>
                   <View style={styles.tabContainer}>
                        <View style={styles.tabIconContainer}>
                            <MaterialIcon name='account-outline' size={40} style={styles.tabIcon}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                            <Text style={styles.tabText}>Account</Text>
                        </View>
                        <View style={styles.tabDownIconContainer}>
                            <Icon name='chevron-down' size={15} style={styles.tabIcon}/>
                        </View>
                   </View>
                   <View style={styles.tabContainer}>
                        <View style={styles.tabIconContainer}>
                            <MaterialIcons name='payment' size={40} style={styles.tabIcon}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                            <Text style={styles.tabText}>Payment Method</Text>
                        </View>
                        <View style={styles.tabDownIconContainer}>
                            <Icon name='chevron-down' size={15} style={styles.tabIcon}/>
                        </View>
                   </View>
                   <View style={styles.tabContainer}>
                        <View style={styles.tabIconContainer}>
                            <MaterialIcon name='calendar' size={40} style={styles.tabIcon}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                            <Text style={styles.tabText}>Membership</Text>
                        </View>
                        <View style={styles.tabDownIconContainer}>
                            <Icon name='chevron-down' size={15} style={styles.tabIcon}/>
                        </View>
                   </View>
               </View>
               <View style={{flex: 4.5}}>

               </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    tabContainer: {
        flex: 1, 
        flexDirection: 'row', 
        marginTop: 20,
        borderWidth: 1, 
        borderColor: '#ececec', 
        borderRadius: 5
    },
    tabIconContainer: {
        flex: 2, alignItems: 'center', justifyContent: 'center'
    },
    tabIcon: {
        color: '#666666',
    },
    tabTextContainer: {
        flex: 7 , justifyContent: 'center', paddingLeft: 5
    },
    tabText: {
        fontSize: 18,
    },
    tabDownIconContainer: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
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
export default connect(mapStateToProps, mapDispatchToEvents)(withNavigation(GeneralScreen))
