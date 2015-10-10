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
  TouchableHighlight
} = React;
 
var EditHabit = React.createClass ({
  getInitialState: function() {
    return {
      habitName: this.props.selectedHabit.habit.habitName,
      // reminderTime: this.props.selectedHabit.habit.reminderTime,
      reminderTime: moment().add(30 - moment(new Date()).minutes() % 30, 'minutes'),
      // dueTime: this.props.selectedHabit.habit.dueTime,
      dueTime: moment().add(30 - moment(new Date()).minutes() % 30, 'minutes')
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
    // TODO -- build update function
    console.log('update habit');
  },
  
  deleteHabit: function() {
    // TODO -- build delete function
    console.log('deleting habit');
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
