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
