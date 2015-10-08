'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  ListView,
  Component,
  Text
} = React;

var HABITS = [
  {habitName: 'Submit a Pull Request', streak: 5, checkinCount: 25, failedCount: 3, reminderTime: '2:30 PM', dueTime: '4:30 PM', streakRecord: 15, active:true},
  {habitName: 'Complete a Pomodoro', streak: 10, checkinCount: 20, failedCount: 4, reminderTime: '2:30 PM', dueTime: '4:30 PM', streakRecord: 20, active:true},
  {habitName: 'Workout', streak: 8, checkinCount: 15, failedCount: 2, reminderTime: '2:30 PM', dueTime: '4:30 PM', streakRecord: 8, active:true}
]

var HabitList = React.createClass ({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  },
  
  componentDidMount: function() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(HABITS),
    })
  },
  
  renderHabit: function(habit) {
    return (
      <View>
        <Text>{habit.habitName}</Text>
        <Text>Streak: {habit.streakRecord}</Text>
        <Text>Due: {habit.dueTime}</Text>
      </View>
    );
  },

  render: function() {
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this.renderHabit.bind(this)} />
    );
  }
});

var styles = StyleSheet.create({
  
});

module.exports = HabitList;
