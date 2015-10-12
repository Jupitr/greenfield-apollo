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
        barTintColor="rgba(0, 10, 20, 0.2)"
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
