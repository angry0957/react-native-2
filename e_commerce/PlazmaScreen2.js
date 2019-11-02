import React, {Component} from 'react';
import {View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { withNavigation } from 'react-navigation';
import { firstLaunchCheck, INC, DEC } from "../actions/index";


class PlazmaScreen2 extends Component{
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(){

    }
    render(){
        return(
            <View  style={styles.mainContainer}>
                <View style={styles.mainText}>
                    <View style={styles.combineText}>
                        <Text style={{color: 'red', fontSize: 40, fontWeight: 'bold'}}>FAKE</Text>
                        <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold'}}> or </Text>
                        <Text style={{color: '#4caf50', fontSize: 40, fontWeight: 'bold'}}>REAL</Text>
                    </View>
                </View>
                <View style={styles.buttonMainContainer}>
                    <TouchableOpacity style={styles.tryAgainButton}>
                        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>Try Again</Text>
                    </TouchableOpacity>
                </View>  
                <View style={styles.bottomContainer}>
                    <Text style={{fontSize: 20, color: 'white'}}>Was this answer correct?</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                        <TouchableOpacity style={styles.yesNoButton}>
                            <Text style={styles.yesNoText}>YES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.yesNoButton}>
                            <Text style={styles.yesNoText}>NO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'black'
    },
    mainText: {
        flex: 4,
        flexDirection: 'column-reverse'
    },
    combineText: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonMainContainer: {
        flex: 3,
        flexDirection: 'column-reverse',
        alignItems: 'center',
    },
    tryAgainButton: {
        backgroundColor: '#8ed1fc',
        width: '30%',
        height: '22%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    bottomContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    yesNoButton: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%',
        height: '55%',
        marginLeft: 10,
        borderRadius: 10,
    },
    yesNoText: {
        color: 'black',
        fontWeight: 'bold',
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
export default connect(mapStateToProps, mapDispatchToEvents)(withNavigation(PlazmaScreen2))
