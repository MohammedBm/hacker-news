import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS, AppRegistry } from 'react-native';
import Dashboard from './App/Screens/DashboardScreen'

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          title: 'Hacker News',
          component: Dashboard,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


AppRegistry.registerComponent('HackerNews', () => App);

module.exports = App;
