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
import AddToDo from './components/add_todo.js'

import {
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <AddToDo />
    );
  }
}

