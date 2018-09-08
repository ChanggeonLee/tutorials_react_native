/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import User from './components/user.js'
import ButtonGroup  from './components/buttonGroup.js'
import NavBar from './components/navBar.js'
import Taps from './components/tap.js'

import {
  StyleSheet, 
  View,
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <User />
        <View style={{height: 40}}>
        </View>
        <ButtonGroup />
        <View style={{flex: 1}}>
        </View>
        <Taps />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
