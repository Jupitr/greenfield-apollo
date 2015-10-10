/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Habits = require('./Habits');
var Home = require('./Home');
var Settings = require('./Settings');

var {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  Component
} = React;

var HabitTrainer = React.createClass({
  
  getInitialState: function() {
    return {
      selectedTab: 'home'  
    };    
  },
   
  render: function() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'home'}
          systemIcon='featured'
          onPress={() => {
            this.setState({
              selectedTab: 'home'
            });
          }}>
          <Home/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'habits'}
          systemIcon='search'
          onPress={() => {
            this.setState({
              selectedTab: 'habits'
            });
          }}>
          <Habits/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'settings'}
          title='Settings'
          onPress={() => {
            this.setState({
              selectedTab: 'settings'
            });
          }}>
          <Settings/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HabitTrainer', () => HabitTrainer);
