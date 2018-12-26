import clientSocket from 'react-native-react-socket';
import { statusActions } from '../carStatus/RcCarActionTypes';
import BleSerial from 'react-native-bluetooth-serial-next';



export function engineSwitchClicked(communicationType,bluetoothDevice,callback){
    if (communicationType === "BLUETOOTH"){
        BleSerial.device(bluetoothDevice.id).write("0!");
    }else{
        clientSocket.sendMessageToServer("/","EngSwtchClck","Clicked",callback);
    }
}
export function carForward(communicationType,bluetoothDevice,callback){
    if (communicationType === "BLUETOOTH"){
        BleSerial.device(bluetoothDevice.id).write("1!");
    }else{
        clientSocket.sendMessageToServer("/","CrFwrd","Forward",callback);
    }
}
export function carLeft(communicationType,bluetoothDevice,callback){
    if (communicationType === "BLUETOOTH"){
        BleSerial.device(bluetoothDevice.id).write("2!");
    }else{
        clientSocket.sendMessageToServer("/","CrLft","Left",callback);
    }
}
export function carRight(communicationType,bluetoothDevice,callback){
    if (communicationType === "BLUETOOTH"){
        BleSerial.device(bluetoothDevice.id).write("3!");
    }else{
        clientSocket.sendMessageToServer("/","CrRght","Right",callback);
    }
}
export function carBackward(communicationType,bluetoothDevice,callback){
    if (communicationType === "BLUETOOTH"){
        BleSerial.device(bluetoothDevice.id).write("4!");
    }else{
        clientSocket.sendMessageToServer("/","CrBcwrd","Backward",callback);
    }
}
export function carStop(communicationType,bluetoothDevice,callback){
    if (communicationType === "BLUETOOTH"){
        BleSerial.device(bluetoothDevice.id).write("5!");
    }else{
        clientSocket.sendMessageToServer("/","CrStp","CarStop",callback);
    }
}
export function gearUp(communicationType,bluetoothDevice,callback){
    if (communicationType === "BLUETOOTH"){
        BleSerial.device(bluetoothDevice.id).write("6!");
    }else{
        clientSocket.sendMessageToServer("/","GrUp","GearUp",callback);
    }
}
export function gearDown(communicationType,bluetoothDevice,callback){
    if (communicationType === "BLUETOOTH"){
        BleSerial.device(bluetoothDevice.id).write("7!");
    }else{
        clientSocket.sendMessageToServer("/","GrDown","GearDown",callback);
    }
}
