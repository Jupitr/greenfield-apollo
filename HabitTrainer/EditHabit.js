'use strict';
 
var React = require('react-native');
 
var {
  StyleSheet,
  NavigatorIOS,
  Component, 
  View,
  Text,
  TextInput,
  TouchableHighlight
} = React;
 
var EditHabit = React.createClass ({
  getInitialState: function() {
    return {
      habitName: this.props.selectedHabit.habit.habitName,
      reminderTime: this.props.selectedHabit.habit.reminderTime,
      dueTime: this.props.selectedHabit.habit.dueTime
    }
  },
  
  updateHabit: function() {
    console.log('update habit');
  },
  
  deleteHabit: function() {
    console.log('deleting habit');
  },
  
  render: function(){
    return (
      <View style={styles.container}>
        <Text style={styles.content}>{this.state.habitName}</Text>
        <Text style={styles.content}>Remind Me At</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({reminderTime: text})}
          value={this.state.reminderTime}
        />
        <Text style={styles.content}>Due At</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({dueTime: text})}
          value={this.state.dueTime}
        />
        <TouchableHighlight
          onPress={this.updateHabit.bind(this)}>
          <Text style={styles.updateButtonText}>Update Habit</Text>
        </TouchableHighlight> 
        <TouchableHighlight
          onPress={this.deleteHabit.bind(this)}>
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
    alignItems: 'center',
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
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
