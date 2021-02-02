/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Navigator from './app/components/Navigation'
class App extends React.Component{
  render(){
    return(
      <Navigator />
    )
  }
}


export default App;
