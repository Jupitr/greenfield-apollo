'use strict';
 
var React = require('react-native');
var HabitSummary = require('./HabitSummary');
 
var {
    StyleSheet,
    NavigatorIOS,
    Component
   } = React;

var Home = React.createClass ({
  
  getInitialState: function() {
    return {
      selectedTab: 'home',
    };    
  },
  
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
          initialRoute={{
            title: 'COLOR IS JUST FOR TESTING',
            component: HabitSummary,
            passProps: {
              habits: this.state.userHabits
            }
        }}/>            
    );
  },
});

var styles = StyleSheet.create({
  container: {
      flex: 1
  }
});
 
module.exports = Home;
