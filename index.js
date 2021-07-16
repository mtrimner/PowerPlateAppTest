/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';
import {createStore} from 'redux';
import reducers from './src/reducers';
import {Provider} from 'react-redux';
import store from './src/redux/store';

// const store = createStore(reducers);

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
