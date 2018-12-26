/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import Store from  "./rcCar/store/Store";
import React, {Component} from 'react';
import thunk from 'redux-thunk'
import {  createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import {withSubscription} from 'react-native-bluetooth-serial-next'

import ControlView from "./rcCar/components/controlComponent/ControlView";


const store = createStore(Store,applyMiddleware(thunk))




type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <ControlView bluetoothEvents = {this.props.events}/>
      </Provider>
    );
  }
}

export default withSubscription({subscriptionName:"events",destroyOnWillUnmount:true})(App)
