import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReadScreen from './Screens/ReadScreen';
import WriteScreen from './Screens/WriteScreen';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
    return (
      <AppContainer/>
    )
  }
}

const TabNavigator=createMaterialTopTabNavigator({
  ReadScreen : {screen : ReadScreen},
  WriteScreen : {screen : WriteScreen}
});
const AppContainer=createAppContainer(TabNavigator)

