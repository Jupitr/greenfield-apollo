'use strict';
 
var React = require('react-native');
var moment = require('moment');
 
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
  
  updateHabit: function() {
    console.log('update habit');
    
    this.props.selectedHabit.habit.reminderTime = this.state.reminderTime;
    this.props.selectedHabit.habit.dueTime = this.state.dueTime;
    
  },
  
  deleteHabit: function() {
    AlertIOS.alert(
      'Delete Habit',
      'Do you want to delete this habit?',
      [
        {text: 'No', onPress: function() {
          return
        }},
        {text: 'Yes', onPress: function() {
          this.props.selectedHabit.habit.active = false
        }},
      ]
    )
  },
  
  render: function(){
    return (
      <View style={styles.container}>
        <Text style={styles.content}>{this.state.habitName}</Text>
        
        <Text style={styles.content}>Remind Me At</Text>
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
        
        <Text style={styles.content}>Due At</Text>
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
        
        <TouchableHighlight
          onPress={this.updateHabit}>
          <Text style={styles.updateButtonText}>Update Habit</Text>
        </TouchableHighlight> 
        
        <TouchableHighlight
          onPress={this.deleteHabit}>
          <Text style={styles.deleteButtonText}>Delete Habit</Text>
        </TouchableHighlight> 
      
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
  updateButtonText: {
    textAlign: 'center',
    color: 'blue',
  },
  deleteButtonText: {
    textAlign: 'center',
    color: 'red',
  }
});

module.exports = EditHabit;
