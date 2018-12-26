import React, {Component} from 'react';
import {Button, StyleSheet, Text, View,Dimensions} from 'react-native';
import clientSocket from 'react-native-react-socket';
import { connect } from 'react-redux';
import {NativeModules} from 'react-native';

//BLOCKS
import ConnectionBlock from './blocks/connectionBlock/ConnectionBlock'
import ControlBlock from './blocks/controlBlock/ControlBlock';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
  });
  


class ControlView extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
          <View style = {styles.container}>
                <ConnectionBlock bluetoothEvents = {this.props.bluetoothEvents}/>
                <ControlBlock/>
          </View>
    
        );
    }
}


function mapStateToProps(store){
    return{
       
    }
}
function mapDispatchToProps(dispatch){
    return{
    
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ControlView);

