/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Provider } from 'react-redux'
import store from './src/redux/store'
import AppViewContainer from './src/AppViewContainer'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <AppViewContainer />
      </Provider>
    );
  }
}
