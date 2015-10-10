'use strict';
 
var React = require('react-native');
var HabitSummary = require('./HabitSummary');
 
var {
    StyleSheet,
    NavigatorIOS,
    Component
   } = React;

var REQUEST_USER_HABITS_URL = 'https://jupitrlegacy.herokuapp.com/public/users/habits';  
var Home = React.createClass ({
  
  getInitialState: function() {
    return {
      selectedTab: 'home',
      userName: 'Public User',
      userHabits: null
    };    
  },

  componentDidMount: function() {
    this.fetchUserHabits();
  },

  fetchUserHabits: function() {
    fetch(REQUEST_USER_HABITS_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log('user habits fetched from server');
        this.setState({
          userHabits: responseData
        });
        console.log(this.state.userHabits);    
      })
      .done();
  },
  
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
          initialRoute={{
            title: 'COLOR IS JUST FOR TESTING',
            component: HabitSummary
        }}
      />            
    );
  },
});

var styles = StyleSheet.create({
  container: {
      flex: 1
  }
});
 
module.exports = Home;
