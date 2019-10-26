import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {connect} from 'react-redux'
import { firstLaunchCheck, INC, DEC } from "../actions/index";


class SideMenu extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={{flex: 0.3}}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <View style={{flex: 0.4, backgroundColor: 'grey', height: 100, width: 100, borderRadius: 100/2}}>

                        </View>
                        <View style={{flex: 0.6}}>
                            <Text style={{textAlign: 'center', marginTop: 30}}>Account Name</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 0.7}}>
                    <View>
                        <Text style={{fontWeight: 'bold', margin: 20}}>Home</Text>
                    </View>
                    <View>
                        <Text style={{fontWeight: 'bold', margin: 20}}>Orders</Text>
                    </View>
                    <View>
                        <Text style={{fontWeight: 'bold', margin: 20}}>Products</Text>
                    </View>
                    <View>
                        <Text style={{fontWeight: 'bold', margin: 20}}>Analytics</Text>
                    </View>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    item:{
        color:"black",
        marginTop:20,
        marginBottom:20,
        marginLeft:20,
        fontWeight:"bold",
    },
    container:{
        flex:1,
        padding: 20
    },
    innerContainer:{
        flex:1,
    },
    ImageIN:{
        flex:0.5,
        marginLeft:35,
        width:80,
        height:80,
        marginBottom:30,
        marginTop:10,
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
    INC,
    firstLaunchCheck
};
};

  export default connect(mapStateToProps, mapDispatchToEvents)(SideMenu)
