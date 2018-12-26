import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,Image,PermissionsAndroid} from 'react-native';
import { connect } from 'react-redux';
import {styleAdjust,getControlStyle} from './ControlBlockBehavior'
import clientSocket from 'react-native-react-socket';
import {accelerometer} from 'react-native-sensors'



//NOTIFICATION CALLBACKS
import { engineSwitchDispatched } from '../../../../parts/notificationCallbacks/EngineNotificationCallbacks';
import { engineSwitchClicked, carForward, carBackward ,carStop, carRight, carLeft, gearUp, gearDown} from '../../../../store/reducers/actions/RcCarActions';
//MODULES
import BasicButton from '../../../modules/touchables/BasicButton';
import { timestamp } from 'rxjs/operators';






class ControlBlock extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    
    componentWillReceiveProps(nextProps,nextState){
        styleAdjust.bind(this)(nextProps)
    }
   
    componentWillMount(){
        const subscription = accelerometer.subscribe((x)=>{
            if (this.props.bluetoothDevice != undefined){
                console.log("USAO SAM TU");
                if (x.y < 0){
                    this.props.carForward(this.props.communicationType,this.props.bluetoothDevice);
                }else if (x.y > 0 && x.y < 6){
                    this.props.carStop(this.props.communicationType,this.props.bluetoothDevice);
                }else if (x.y > 6){
                    this.props.carBackward(this.props.communicationType,this.props.bluetoothDevice);
                }
            }
        })
        styleAdjust.bind(this)(this.props);
    }


    render(){
        let styles = getControlStyle();
        console.log(this.props)
        return(
            <View style = {styles.mainView}>
                <View key = {"Info"} style = {styles.info}>
                
                </View>

                <View key = {"ControlPanel"} style = {styles.controlPanel}>

                    <View key ={"ControlPanel_bar"} style = {styles.controlPanel_bar}>
                        <BasicButton onPress = {()=>{this.props.engineSwitch(this.props.communicationType,this.props.bluetoothDevice)}} styles = {styles.controlPanel_bar_turnEngineButton} text = {"        "}></BasicButton>
                    </View>

                    <View key ={"ControlPanel_container"} style = {styles.controlPanel_container}>

                        <View key = {"ControlPanel_container_direction"} style = {styles.controlPanel_container_direction}>

                            <View style = {styles.controlPanel_container_direction_arrows}>

                                    <View style = {styles.controlPanel_container_direction_left}>
                                        <BasicButton styles = {styles.controlPanel_container_direction_button}
                                                     onTouchStart = {()=>{this.props.carLeft(this.props.communicationType,this.props.bluetoothDevice)}}
                                                     onTouchEnd = {()=>{this.props.carStop(this.props.communicationType,this.props.bluetoothDevice)}}
                                                     imageUrl = {()=>{return require('../../../../../assets/arrowleft.png')}}></BasicButton>
                                    </View>

                                    <View style = {styles.controlPanel_container_direction_upDown}>
                                        <BasicButton onTouchStart = {()=>{this.props.carForward(this.props.communicationType,this.props.bluetoothDevice)}} 
                                                     onTouchEnd = {()=>{this.props.carStop(this.props.communicationType,this.props.bluetoothDevice)}}
                                                     styles = {styles.controlPanel_container_direction_button} 
                                                     imageUrl = {()=>{return require('../../../../../assets/arrowup.png')}}></BasicButton>

                                        <BasicButton onTouchStart = {()=>{this.props.carBackward(this.props.communicationType,this.props.bluetoothDevice)}}
                                                     onTouchEnd = {()=>{this.props.carStop(this.props.communicationType,this.props.bluetoothDevice)}}
                                                     styles = {styles.controlPanel_container_direction_button}
                                                     imageUrl = {()=>{return require('../../../../../assets/arrowdown.png')}}></BasicButton>
                                    </View>

                                    <View style = {styles.controlPanel_container_direction_right}>
                                        <BasicButton styles = {styles.controlPanel_container_direction_button}
                                                     onTouchStart = {()=>{this.props.carRight(this.props.communicationType,this.props.bluetoothDevice)}}
                                                     onTouchEnd = {()=>{this.props.carStop(this.props.communicationType,this.props.bluetoothDevice)}}
                                                     imageUrl = {()=>{return require('../../../../../assets/arrowright.png')}}></BasicButton>
                                    </View>
                            </View>
                            
                        </View>

                        <View key = {"ControlPanel_container_speed"} style = {styles.controlPanel_container_speed}>
                            <Text>SPEED</Text>

                            <BasicButton onPress = {this.props.gearUp}
                                        styles = {styles.controlPanel_container_speed_up_button} 
                                        imageUrl = {()=>{return require('../../../../../assets/arrowup.png')}}></BasicButton>


                            <Text>{this.props.gear}</Text>

                            <BasicButton onPress = {this.props.gearDown} 
                                        styles = {styles.controlPanel_container_speed_up_button}             
                                        imageUrl = {()=>{return require('../../../../../assets/arrowdown.png')}}></BasicButton>
                        </View>

                    </View>
                    

                </View>

               
            </View>
        )
    }
}



function mapStateToProps(store){
    return{
        engineStatus : store.carStatus.basicStatus.engine,
        gear:store.carStatus.basicStatus.gear,
        communicationType:store.connectionStatus.communication.type,
        bluetoothDevice:store.connectionStatus.bluetoothDevice.device,
    }
}
function mapDispatchToProps(dispatch){
    clientSocket.addNotificationMethod("EngSwtchClck",engineSwitchDispatched(dispatch));

    return{
        engineSwitch:(communicationType,bluetoothDevice)=>{engineSwitchClicked(communicationType,bluetoothDevice,(status)=>{console.log("status from dispatch is  "+status)})},
        carForward:(communicationType,bluetoothDevice)=>{carForward(communicationType,bluetoothDevice,(status)=>{console.log("status from dispatch is "+status)})},
        carRight:(communicationType,bluetoothDevice)=>{carRight(communicationType,bluetoothDevice,(status)=>{console.log("status from dispatch is "+status)})},
        carLeft:(communicationType,bluetoothDevice)=>{carLeft(communicationType,bluetoothDevice,(status)=>{console.log("status from dispatch is "+status)})},
        carBackward:(communicationType,bluetoothDevice)=>{carBackward(communicationType,bluetoothDevice,(status)=>{console.log("status from dispatch is "+status)})},
        carStop:(communicationType,bluetoothDevice)=>{carStop(communicationType,bluetoothDevice,(status)=>{console.log("status from dispatch is "+status)})},
        gearUp:(communicationType,bluetoothDevice)=>{gearUp(communicationType,bluetoothDevice,(status)=>{console.log("status from dispatch is "+status)})},
        gearDown:(communicationType,bluetoothDevice)=>{gearDown(communicationType,bluetoothDevice,(status)=>{console.log("status from dispatch is "+status)})},
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ControlBlock);
