import React, {Component} from 'react';
import {View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { withNavigation } from 'react-navigation';
import { firstLaunchCheck, INC, DEC } from "../actions/index";


class ThankYouScreen extends Component{
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(){
        const {navigate} = this.props.navigation;
        navigate('ReferralProgramScreenStack')
    }
    render(){
        return(
            <View  style={styles.mainContainer}>
                <TouchableOpacity onPress={this.submit}>
                    <Image resizeMode={'contain'} style={styles.immageTag} source={require('../assets/thankyou.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    immageTag: {
        backgroundColor: 'white',
    },
    thankYouMessage: {
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center'
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
export default connect(mapStateToProps, mapDispatchToEvents)(withNavigation(ThankYouScreen))
