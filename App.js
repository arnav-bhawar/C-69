import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {creatrAppContainer} from "react-navigation";
import { createButtomTabNavigator} from "react-navigation-tabs";

import TransactionScreen from "./screes/BookTransactionScreen";
import SearchScreen from "./sreens/SearchScreen";

export default class App extends React.Component  {
  render(){ 
  return <AppContainer />;
   
  }
}

const TabNavigator = createButtomTabNavigator({
  Transaction: {screen: TransactionScreen},
  Search: {scree: SearchScreen}
});

const AppContainer = creaeAppConatiner(TabNavigator);

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'red',
alignItems: 'center',
justifyContent: 'center',
},
});
