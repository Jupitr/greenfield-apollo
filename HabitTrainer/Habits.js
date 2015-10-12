'use strict';
 
var React = require('react-native');
var HabitList = require('./HabitList');
 
var {
  StyleSheet,
  NavigatorIOS,
  Component
} = React;
 
var Habits = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        barTintColor="rgba(0, 20, 40, 0.8)"
        titleTextColor='white'
        style={styles.container}
        initialRoute={{
      title: 'My Habits',
      component: HabitList
      }}/>            
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
 
module.exports = Habits;
