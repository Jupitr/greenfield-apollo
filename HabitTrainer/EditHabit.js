'use strict';
 
var React = require('react-native');
 
var {
  StyleSheet,
  NavigatorIOS,
  Component, 
  View,
  Text,
  TextInput
} = React;
 
var EditHabit = React.createClass ({
  getInitialState: function() {
    var habitName = this.props.selectedHabit.habit.habitName;
    var reminderTime = this.props.selectedHabit.habit.reminderTime;
    var dueTime = this.props.selectedHabit.habit.dueTime;
    return {
      habitName: habitName,
      reminderTime: reminderTime,
      dueTime: dueTime
    }
  },
  
  render: function(){
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Daily Habit</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({habitName: text})}
        value={this.state.habitName}
      />
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
  }
});

module.exports = EditHabit;
