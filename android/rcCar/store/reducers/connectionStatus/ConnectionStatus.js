import { statusActions  } from "./ConnectionActionTypes";

const initialState ={
    communication:{
        type:"BLUETOOTH",
    },
    serverConnection:{
        status:"OFFLINE"
    },
    bluetoothDevice:{
        status:"NO DEVICE CONNECTED",
        device:undefined,
    }
}

function connectToServer(state,payload){
    return {...state,serverConnection:{...state.serverConnection,status:payload}}
}
function communcationType(state,payload){
    return {...state,communication:{...state.communication,type:payload}}
}
function newBluetoothConnectedDevice(state,payload){
    return {...state,bluetoothDevice:{...state.bluetoothDevice,device:payload,status:"DEVICE CONNECTED"}}
}

export default function(state =initialState,action ){
    switch(action.type) {
        
        case statusActions.CONNECT_TO_SERVER:
            return connectToServer(state,action.payload);
        case statusActions.COMMUNICATION_TYPE:
            return communcationType(state,action.payload);
        case statusActions.BLUETOOTH_CONNECTED_DEVICE:
            return  newBluetoothConnectedDevice(state,action.payload);  
       

        default:
            return state;
    }
}

