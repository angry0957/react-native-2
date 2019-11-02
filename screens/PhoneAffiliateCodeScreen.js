import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import { withNavigation } from 'react-navigation';
import { firstLaunchCheck, INC, DEC } from "../actions/index";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class PhoneAffiliateCodeScreen extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <View style={styles.mainHeadingContainer}>
                    <Text style={styles.mainHeadingText}>Account, this is your Code</Text>
                </View>
                <View style={styles.SearchBoxcontainer}>
                    <Icon name='attachment' size={25}  style= {{color:'#505050'}}/>
                    <TextInput style={styles.searchInput}/>  
                </View>
                <View style={styles.instructionContainer}>
                    <Text style={styles.instructionText}>Instructions</Text>
                </View>
                <View>
                    <View style={styles.instructionDescContainer}>
                        <Text style={styles.roundText}>1</Text>
                        <Text style={styles.instructionDescText}>Copy your Affiliate Code</Text>
                    </View>
                    <View style={styles.instructionDescContainer}>
                        <Text style={styles.roundText}>2</Text>
                        <Text style={styles.instructionDescText}>Use Your Platform to bring in New Members</Text>
                    </View>
                    <View style={styles.instructionDescContainer}>
                        <Text style={styles.roundText}>3</Text>
                        <Text style={styles.instructionDescText}>Sit back and watch the money come in, 
                        <Text style={{color: 'blue', textDecorationLine: 'underline'}}> here</Text>
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainHeadingContainer:{
        alignItems: 'center', 
        margin: 20
    },
    mainHeadingText: {
        fontWeight: 'bold', 
        fontSize: 18, 
        textAlign: 'center'
    },
    SearchBoxcontainer: {
        flexDirection: 'row-reverse',
        backgroundColor: '#F7F7F7',
        margin: 20,
    },
    searchInput: {
        width: '90%',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },
    instructionContainer: {
        marginTop: 30,
        marginRight: 30,
        marginLeft: 30,
        alignItems: 'center',
    },
    instructionText: {
        textDecorationLine: 'underline', 
        fontWeight: 'bold',
        fontSize: 16, 
    },
    instructionDescContainer: {
        flexDirection: 'row',
        marginLeft: 40,
        marginTop: 20,
        marginRight: 20,
    },
    roundText: {
        backgroundColor: '#FF6700',
        width: 40,
        height: 40,
        borderRadius: 25,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    instructionDescText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 40,
        textAlignVertical: 'center',
    }
})
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
export default connect(mapStateToProps, mapDispatchToEvents)(withNavigation(PhoneAffiliateCodeScreen))