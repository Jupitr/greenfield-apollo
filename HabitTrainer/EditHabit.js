'use strict';
 
var React = require('react-native');
var moment = require('moment');
var Button = require('apsl-react-native-button'); 
 
var {
  StyleSheet,
  NavigatorIOS,
  Component, 
  View,
  Text,
  DatePickerIOS,
  TextInput,
  TouchableHighlight,
  AlertIOS
} = React;

var BASE_URL = 'https://jupitrlegacy.herokuapp.com';
// var BASE_URL = 'http://localhost:8080';
var REQUEST_USER_HABITS_URL = BASE_URL + '/public/users/habits/';
var PUT_USER_HABIT_URL = BASE_URL + '/public/users/habits/';
 
var EditHabit = React.createClass ({
  getInitialState: function() {
    return {
      habitName: this.props.selectedHabit.habit.habitName,
      reminderTime: this.props.selectedHabit.habit.reminderTime,
      dueTime: this.props.selectedHabit.habit.dueTime
    }
  },

  // helper functions to set reminder and due time  
  subtractReminderTime: function(){
    this.setState({ reminderTime: moment(this.state.reminderTime).subtract(30, 'minutes') });
  },
  addReminderTime: function(){
    this.setState({ reminderTime: moment(this.state.reminderTime).add(30, 'minutes') });
  },
  subtractDueTime: function(){
    this.setState({ dueTime: moment(this.state.dueTime).subtract(30, 'minutes') });
  },
  addDueTime: function(){
    this.setState({ dueTime: moment(this.state.dueTime).add(30, 'minutes') });
  },
  
  putToServer: function(habit) {
    var url = PUT_USER_HABIT_URL + habit._id;
    fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(habit)
    })
    .then((responseData) => {
      console.log(responseData);
    })
    .done();
  },
  
  updateHabit: function() {
    var habit = this.props.selectedHabit.habit;
    habit.reminderTime = moment(this.state.reminderTime).toISOString();
    habit.dueTime = moment(this.state.dueTime).toISOString();
    this.putToServer(habit);
    this.props.navigator.pop();
  },
  
  deactivateHabit: function() {
    var habit = this.props.selectedHabit.habit;
    var self = this
    AlertIOS.alert(
      'Deactivate Habit',
      'Do you want to deactivate this habit?',
      [
        {text: 'No', onPress: function() {
          return
        }},
        {text: 'Yes', onPress: function() {
          habit.active = false;
          self.putToServer(habit);
          self.props.navigator.pop();
        }},
      ]
    )
  },
  
  render: function(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.habitName}</Text>
        
        <Text style={styles.text}>Remind Me At</Text>
        <View style={styles.rowContainer}>
          <TouchableHighlight
            onPress={this.subtractReminderTime}
            underlayColor="transparent">
            <Text style={styles.text}>-</Text>
          </TouchableHighlight>
          <Text style={styles.text}> { moment(this.state.reminderTime).format('hh:mm') + '\n' + moment(this.state.reminderTime).format('A') } </Text>
          <TouchableHighlight
            onPress={this.addReminderTime}
            underlayColor="transparent">
            <Text style={styles.text}>+</Text>
          </TouchableHighlight>
        </View>     
        
        <Text style={styles.text}>Due At</Text>
        <View style={styles.rowContainer}>
          <TouchableHighlight
            onPress={this.subtractDueTime}
            underlayColor="transparent">
            <Text style={styles.text}>-</Text>
          </TouchableHighlight>
          <Text style={styles.text}> { moment(this.state.dueTime).format('hh:mm') + '\n' + moment(this.state.dueTime).format('A') } </Text>
          <TouchableHighlight
            onPress={this.addDueTime}
            underlayColor="transparent">
            <Text style={styles.text}>+</Text>
          </TouchableHighlight>
        </View>
        
        <Button style={styles.updateButton}
          textStyle={styles.buttonText}
          onPress={this.updateHabit}>
          Update Habit
        </Button> 
        
        <Button style={styles.deactivateButton}
          textStyle={styles.buttonText}
          onPress={this.deactivateHabit}>
          Deactivate Habit
        </Button> 
      
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
    color: 'black',
  },
  buttonText: {
    color: 'white'
  },
  updateButton: {
    backgroundColor: '3498db',
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 50,
    marginRight: 50,
  },
  deactivateButton: {
    backgroundColor: '#DB575F',
    marginLeft: 50,
    marginRight: 50,
  },
});

module.exports = EditHabit;
