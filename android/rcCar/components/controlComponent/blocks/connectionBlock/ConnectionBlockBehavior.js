import BleSerial from 'react-native-bluetooth-serial-next';

let styles = {
    mainView: {
      flex:0.5,
      flexDirection:"row",
      marginTop:5,
      
    },
    switchView:{
        view:{
            flex:0.4,
            marginRight:5,
            borderStyle:"solid",
            borderRightWidth:1,
            borderRightColor:"gray",
            alignItems:"center",
        },
        button:{
            container:{
                backgroundColor:"gray",
                height:25,
                width:60,
                borderRadius:25,
                margin:15,
                
            },
            button:{
                
            },
            buttonText:{
                fontSize:8,
                color:"white",
                fontWeight:"bold"
            }

        }
    },
    WIFI:{
        ipAddressInput:{
            flex:2,
            height:50,
            color:"gray",
            fontWeight:"bold",
            borderBottomWidth: 0.8,
            marginLeft:5
        },
        view:{
            flex:1,
            flexDirection:"row",
            margin:5,
        },
    },
    BLUETOOTH:{
        view:{
            flex:1,
            flexDirection:"row",
            margin:5,
        },
        flatList:{
            view:{
                flex:1,
            },
            items:{
                view:{
                    flex:1,
                    flexDirection:"row",
                    marginBottom:10,
                },
                text:{
                    flex:1,
                },
                button:{
                    container:{
                        flex:0.5,
                        backgroundColor:"red",
                        height:15,
                        borderRadius:30,
                        margin:1,
                    },
                    button:{
                        
                    },
                    buttonText:{
                        fontSize:10,
                        color:"white",
                        fontWeight:"bold"
                    }
                }
            }
        },   
    }
  };
let connectButton ={
    container:{
        flex:1,
        backgroundColor:"green",
        height:45,
        borderRadius:30,
        margin:5,
    },
    button:{
        
    },
    buttonText:{
        color:"white",
        fontWeight:"bold"
    }
}



export function styleAdjust(props){
    if (props.connected === "OFFLINE"){
        connectButton =  connectButtonStyleAdjust("red");
        stateAdjust(this,"CONNECT",true);
        styles =  adjustBorderIpAddress(0.7);
    }else{
        connectButton =  connectButtonStyleAdjust("green");
        stateAdjust(this,"CONNECTED",false);
        styles = adjustBorderIpAddress(0.1);
    }
}
export function onChangeTextFieldIpAddress(newIpAddress){
    this.setState({
        ...this.state,values:{...this.state.values,ipAddress:newIpAddress}
    });
}
export function getConnectionStyles(){
    return [styles,connectButton];
}


export function checkUnpairedBluetoothDevices(){
    const promise = BleSerial.isEnabled();

    promise.then(async (status)=>{
        if (!status){
            BleSerial.enable();
        }
        let newState;
        const devices = await BleSerial.list();

        if (devices.length > 0){
            newState = devices;
        }else{
            newState = [{name:"No devices"}]
        }
        await BleSerial.cancelDiscovery();

        this.setState({...this.state,communicationSettings:
            {...this.state.communicationSettings,bluetooth:
            {...this.state.communicationSettings.bluetooth,scannedDevices:newState}
        }});
    })
}





function connectButtonStyleAdjust(color){
    return {...connectButton,container:{...connectButton.container,backgroundColor:color}}
}
function stateAdjust(This,textConnect,ipAddressActive){
    This.setState({
        ...This.state,texts:{...This.state.texts,connectButtonText:textConnect},
        bool:{...This.state.bool,ipAddressActive:ipAddressActive}
    });     
}
function adjustBorderIpAddress(width){
    return {...styles,WIFI:{...styles.WIFI,ipAddressInput:{...styles.WIFI.ipAddressInput,borderBottomWidth:width}}};
}









