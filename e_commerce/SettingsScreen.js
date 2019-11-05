import React, {Component} from 'react';
import {View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { withNavigation } from 'react-navigation';
import { firstLaunchCheck, INC, DEC } from "../actions/index";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import Icon from 'react-native-vector-icons/FontAwesome'


class SettingScreen extends Component{
    constructor(props){
        super(props)
        this.general = this.general.bind(this)
        this.orders = this.orders.bind(this)
        this.referral = this.referral.bind(this)
        this.logout = this.logout.bind(this) 
    }
    general(){
        const {navigate} = this.props.navigation;
        navigate('GeneralScreenStack')
    }
    orders(){
        const {navigate} = this.props.navigation;
        navigate('OrderScreenStack')
    }
    referral(){
        const {navigate} = this.props.navigation;
        navigate('ReferralProgramScreenStack')
    }
    logout(){
        const {navigate} = this.props.navigation;
        navigate('LoginStack')
    }
    render(){
        return(
            <View style={{flex: 1, margin: 10}}>
                <View  style={{flex: 3, flexDirection: 'row'}}>
                    <View style={{flex: 3, alignItems: 'flex-end', justifyContent: 'center'}}>
                        <Image style={{width: 100, height: 100, borderRadius: 50, backgroundColor: 'grey', marginRight: 5}}/>
                    </View>
                    <View style={{flex: 2, justifyContent: 'center'}}>
                        <Text style={{fontSize: 25}}>Account Name</Text>
                    </View>
                    <View style={{flex: 3}}/>
                </View>
                <View style={{height: .5, backgroundColor: 'grey'}}/>
                <View style={{flex: 5}}>
                    <TouchableOpacity onPress={this.general} style={styles.tab}>
                        <SimpleLineIcon name='globe' size={30} style={styles.tabIcon}/>
                        <Text style={styles.tabText}>General</Text>
                        <Icon name='angle-right' size={25} style={styles.rightIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.orders} style={styles.tab}>
                        <Icon name='instagram' size={30} style={styles.tabIcon}/>
                        <Text style={styles.tabText}>Orders</Text>
                        <Icon name='angle-right' size={25} style={styles.rightIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.referral} style={styles.tab}>
                        <Icon name='bullhorn' size={30} style={styles.tabIcon}/>
                        <Text style={styles.tabText}>Refferrals</Text>
                        <Icon name='angle-right' size={25} style={styles.rightIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tab}>
                        <Icon name='bank' size={30} style={styles.tabIcon}/>
                        <Text style={styles.tabText}>Legal</Text>
                        <Icon name='angle-right' size={25} style={styles.rightIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.logout} style={styles.tab}>
                        <MaterialIcon name='logout' size={30} style={styles.tabIcon}/>
                        <Text style={styles.tabText}>Log Out</Text>
                        <Icon name='angle-right' size={25} style={styles.rightIcon}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:4}}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    tab: {
        flex: 1, 
        flexDirection: 'row', 
        borderColor: 'grey', 
        borderBottomWidth: .5
    },
    tabIcon: {
        alignSelf: 'center',
        flex: 1,
    },
    tabText: {
        fontSize: 16, 
        flex: 9,
        marginLeft: 10, 
        alignSelf: 'center',
    },
    rightIcon: {
        alignSelf: 'center',
        marginRight: 5
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
export default connect(mapStateToProps, mapDispatchToEvents)(withNavigation(SettingScreen))
