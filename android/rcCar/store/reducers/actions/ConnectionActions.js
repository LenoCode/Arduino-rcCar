import { statusActions } from "../connectionStatus/ConnectionActionTypes";
import clientSocket from 'react-native-react-socket';
import BleSerial from 'react-native-bluetooth-serial-next';

function dispatchConnectToServer(dispatch,status){
    const action= {
        type:statusActions.CONNECT_TO_SERVER,
        payload:""
    }
    if (status){
        action.payload = "ONLINE";
    }else{
        action.payload = "OFFLINE";
    }
    dispatch(action);
}

export function connectToServer(ipAddress,dispatch){
    clientSocket.connectToServer(ipAddress,3000,(status)=>{
        dispatchConnectToServer(dispatch,status);
    });
}
export function changeCommunicationType(type,dispatch){
    const action= {
        type:statusActions.COMMUNICATION_TYPE,
        payload:type,
    }
    dispatch(action);
}
export async function connectToBluetoothDevice(device,dispatch){
    BleSerial.isConnected().then(async(status)=>{
        if (status){
            BleSerial.disconnect();
        }
        const connectionStatus = await BleSerial.device(device.id).connect();
   
        if (connectionStatus){
            console.log(connectionStatus);
            const action = {
                type:statusActions.BLUETOOTH_CONNECTED_DEVICE,
                payload:connectionStatus.device,
            }
            dispatch(action);
        }
    });  
}


