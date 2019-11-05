import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { withNavigation } from 'react-navigation';
import { firstLaunchCheck, INC, DEC } from "../actions/index";


class ForgotPasswordScreen extends Component{
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(){
        const {navigate} = this.props.navigation;
        navigate('PlazmaScreen2Stack')
    }
    render(){
        return(
            <View style={styles.mainContainer}>
                <Text style={styles.headerText}>Enter 6 Digit Code</Text>
                <Text style={{justifyContent: 'center'}}>Code sent to:  e********@example.com</Text>
                <View style={{height: 30, backgroundColor: '#f7f7f7', marginTop: '20%', width: '90%'}}>
                    <TextInput style={{padding: 5, height: 30}}></TextInput>
                </View>
                
                <View style={styles.submitButton}>
                    <TouchableOpacity onPress={this.submit}>
                        <Text 
                        style={{color: 'white',height: 40, fontWeight: 'bold'}}
                        >
                            Enter Code
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
};

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: '30%',
        marginLeft: 10,
        marginRight:  10,
        alignItems: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
        justifyContent: 'center',
    },
    submitButton: {
        marginTop: '20%',
        width: '90%',
        backgroundColor: '#FF008A',
        justifyContent: "center", 
        alignItems: "center"
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
export default connect(mapStateToProps, mapDispatchToEvents)(withNavigation(ForgotPasswordScreen))
