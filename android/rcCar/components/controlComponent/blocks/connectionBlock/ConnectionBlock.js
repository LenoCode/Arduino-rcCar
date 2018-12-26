import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,FlatList} from 'react-native';
import { connect } from 'react-redux';
import {styleAdjust, onChangeTextFieldIpAddress,getConnectionStyles,checkUnpairedBluetoothDevices }from './ConnectionBlockBehavior';

//ACTIONS
import {connectToServer,changeCommunicationType, connectToBluetoothDevice} from '../../../../store/reducers/actions/ConnectionActions';

//MODULES
import BasicButton from '../../../modules/touchables/BasicButton';



class ConnectionBlock extends Component{
    constructor(props){
        super(props)
        this.bluetoothEvents = null;
        this.state = {
            communicationSettings:{
                bluetooth:{
                    scannedDevices:[{name:"Scanning devices ...."}],
                }
            },
            texts:{
                connectButtonText : "CONNECT"
            },
            values:{
                ipAddress:"",
            },
            bool:{
                ipAddressActive:true,
            }
        }
   
    }
   
      
    componentWillReceiveProps(nextProps,nextState){
        styleAdjust.bind(this)(nextProps)
    }
    
    componentWillMount(){
        checkUnpairedBluetoothDevices.bind(this)();
        styleAdjust.bind(this)(this.props);
    }


    checkCommunicationType(styles,connectButtonStyles){
        if (this.props.communicationType === "WIFI"){
            return(
                <View style = {styles.WIFI.view}>
                    <TextInput editable={this.state.bool.ipAddressActive} placeholder={"IP ADDRESS"} 
                            style={styles.WIFI.ipAddressInput} 
                            onChangeText={(text)=>{onChangeTextFieldIpAddress.bind(this)("192.168.43.197")}}
                    ></TextInput>

                    <BasicButton onPress = {()=>{this.props.connect(this.props.connected,this.state.values.ipAddress)}} 
                                styles = {connectButtonStyles} text={this.state.texts.connectButtonText} 
                    ></BasicButton>
                </View>);
        }else{
            return this.checkBluetoothDeviceStatus();
        }
    }

    checkBluetoothDeviceStatus(){
        if (this.props.bluetoothDeviceStatus === "DEVICE CONNECTED"){
            return (
                <View style = {styles.BLUETOOTH.view}>
                    <Text>CONNECTED TO {this.props.bluetoothDevice.name}</Text>
                </View>
            );
        }else{
            return(
                <View style = {styles.BLUETOOTH.view}>
                <FlatList data = {this.state.communicationSettings.bluetooth.scannedDevices}
                    renderItem = {(item)=>{
                        return (
                            <View key = {item.item.name} style = {styles.BLUETOOTH.flatList.items.view}>
                                <Text style = {styles.BLUETOOTH.flatList.items.text}>{item.item.name}</Text>

                                {item.item.name != "Scanning devices ...." && item.item.name !="No devices" &&
                                    <BasicButton onPress = {()=>{this.props.connectBluetooth(item.item)}} text={"CONNECT"} styles = {styles.BLUETOOTH.flatList.items.button}/>
                                }
                            </View>
                            );
                        }
                    }/>
                </View>
            );
        }
    }

    render(){
        [styles,connectButtonStyles] = getConnectionStyles();
        let components = this.checkCommunicationType(styles,connectButtonStyles);
        return(
           <View style = {styles.mainView}>
                <View style = {styles.switchView.view}>
                    <BasicButton onPress = {()=>{this.props.communicationTypeSwitch("WIFI")}} styles = {styles.switchView.button} text = {"WIFI"}/>
                    <BasicButton onPress = {()=>{this.props.communicationTypeSwitch("BLUETOOTH")}} styles = {styles.switchView.button} text = {"BLUETOOTH"}/>
                </View>
                {components}
           </View>
        )
    }
}



function mapStateToProps(store){
    return{
        connected : store.connectionStatus.serverConnection.status,
        communicationType:store.connectionStatus.communication.type,
        bluetoothDeviceStatus:store.connectionStatus.bluetoothDevice.status,
        bluetoothDevice:store.connectionStatus.bluetoothDevice.device,
    }
}
function mapDispatchToProps(dispatch){

    return{
        connect:(connected,ipAddress)=>{if(connected === "OFFLINE")connectToServer(ipAddress,dispatch)},
        communicationTypeSwitch:(type)=>{changeCommunicationType(type,dispatch)},
        connectBluetooth:(device)=>{connectToBluetoothDevice(device,dispatch)},
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ConnectionBlock);
