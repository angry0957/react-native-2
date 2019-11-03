import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import { withNavigation } from 'react-navigation';
import { firstLaunchCheck, INC, DEC } from "../actions/index";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


class ReferralProgramScreen extends Component{
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(){

    }
    render(){
        return(
            <View  style={{flex: 1}}>
                <View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={styles.horn}>
                        <Icon name='bullhorn' size={100} />
                    </View>
                </View>
                <View style={styles.middleTextContainer}>
                    <Text style={{fontSize: 25, fontWeight: 'bold', color: 'grey', marginTop: '5%'}}>Referral Program</Text>
                    <Text style={{marginTop: '5%', marginRight: '5%', marginLeft: '5%'}}>
                        Have 5 more friends become members and get a free month of access for as long as all 5 
                        referrals stay members
                    </Text>
                </View>
                <View style={styles.bottomTextContainer}>
                    <Text style={{fontWeight: 'bold', fontSize: 25, color: 'grey'}}>Coming SOON</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    middleTextContainer: {
        flex: 4,
        alignItems: 'center',
    },
    bottomTextContainer: {
        flex: 8,
        alignItems: 'center'
    },
    horn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2,
        width: 180,
        height: 180,
        borderRadius: 90,
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
export default connect(mapStateToProps, mapDispatchToEvents)(withNavigation(ReferralProgramScreen))
