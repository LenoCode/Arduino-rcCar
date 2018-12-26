import { statusActions } from "../../store/reducers/carStatus/RcCarActionTypes";

export function engineSwitchDispatched(dispatch){
    return (status)=>{
        console.log("status");
        dispatch({
            type:statusActions.ENGINE_SWITCH,
            payload:status
        });
    }
}