'use strict';
 
var React = require('react-native');
var HabitSummary = require('./HabitSummary');
 
var {
    StyleSheet,
    NavigatorIOS,
    Component
   } = React;
 
var styles = StyleSheet.create({
  container: {
      flex: 1
  }
});
 
var Home = React.createClass ({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
          initialRoute={{
            title: 'COLOR IS JUST FOR TESTING',
            component: HabitSummary
        }}/>            
    );
  },
});
 
module.exports = Home;
