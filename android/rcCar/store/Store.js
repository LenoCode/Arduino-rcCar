import {combineReducers} from 'redux'
import carStatus from './reducers/carStatus/RcCarStatus';
import connectionStatus from './reducers/connectionStatus/ConnectionStatus';



const store = combineReducers({
    carStatus,
    connectionStatus
})


export default store;