import { statusActions  } from "./RcCarActionTypes";

const initialState ={
    basicStatus:{
        engine:"OFF",
        gear:0
    },
}



function engineSwitch(state,payload){
    return {...state,basicStatus:{...state.basicStatus,engine : payload}}
}
function gearShift(state,payload){
    return {...state,basicStatus:{...state.basicStatus,gear : payload}}
}


export default function(state =initialState,action ){
    switch(action.type) {

        case statusActions.ENGINE_SWITCH:
            return engineSwitch(state,action.payload);

        case statusActions.GEAR_SHIFT:
            return gearShift(state,action.payload);    

        default:
            return state;
    }
}

