'use strict';

var React = require('react-native');
var Swipeout = require('react-native-swipeout');
var EditHabit = require('./EditHabit.js');

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

var editRoute = {
  title: 'Edit Habit',
  component: EditHabit
};


// var editBtn = [
//   {
//     text: 'Edit',
//     backgroundColor: 'orange',
//     onPress: function(){ 
//       navigator.push(editRoute);
//     }
//   }
// ];

var completeBtn = [
 {
    text: 'Did It!',
    backgroundColor: 'green',
    onPress: function(){ alert('button pressed') },
    autoClose: true
  }
];

var HabitList = React.createClass ({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  },
  
  componentDidMount: function() {
    var self = this;
    this.editBtn = [{
      text: 'Edit',
      backgroundColor: 'orange',
      onPress: function(){ 
        self.props.navigator.push(editRoute);
      }
    }],

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(HABITS),
    })
  },
  
  renderHabit: function(habit) {
    return (
      <Swipeout
        right={completeBtn}
        left={this.editBtn}>
        <View>
          <Text>{habit.habitName}</Text>
          <Text>Streak: {habit.streakRecord}</Text>
          <Text>Due: {habit.dueTime}</Text>
        </View>
      </Swipeout>
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
