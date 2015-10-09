'use strict';

var React = require('react-native');
var Swipeout = require('react-native-swipeout');
var EditHabit = require('./EditHabit.js');
var CreateHabit = require('./CreateHabit.js');

var {
  StyleSheet,
  View,
  ListView,
  Text,
  TouchableHighlight,
  Component
} = React;

var HABITS = [
  {habitName: 'Submit a Pull Request', streak: 5, checkinCount: 25, failedCount: 3, reminderTime: '2:30 PM', dueTime: '4:30 PM', streakRecord: 15, active:true},
  {habitName: 'Complete a Pomodoro', streak: 10, checkinCount: 20, failedCount: 4, reminderTime: '2:30 PM', dueTime: '4:30 PM', streakRecord: 20, active:true},
  {habitName: 'Workout', streak: 8, checkinCount: 15, failedCount: 2, reminderTime: '2:30 PM', dueTime: '4:30 PM', streakRecord: 8, active:true}
]

// empty object to hole selected row
var activeRow = {};

var editRoute = {
  title: 'Edit Habit',
  component: EditHabit,
  passProps: {
    selectedHabit: activeRow
  }
};

var createRoute = {
  title: 'Create Habit',
  component: CreateHabit,
  passProps: {
    userHabits: HABITS
  }
}

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
    }]
    
    this.completeBtn = [{
      text: 'Did It!',
      backgroundColor: 'green',
      onPress: function(){ alert('Hi, Lain. I\'m back') }
    }]
  
    this._redirectToCreateHabit = function() {
      self.props.navigator.push(createRoute);
    },

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(HABITS),
    })
    
  },
  
  
  renderHabit: function(habit) {
    return (
      <Swipeout
        right={this.completeBtn}
        left={this.editBtn}
        autoClose='true'
        // sets selected row habit property on swipe
        onOpen={function() {activeRow.habit = habit}}
        >
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
      <View style={styles.container}>
        <ListView stye={styles.listContainer}
          dataSource = {this.state.dataSource}
          renderRow = {this.renderHabit.bind(this)}
        />
        <TouchableHighlight
          style={styles.btnContainer}
          onPress={this._redirectToCreateHabit}>
          <Text style={styles.createButtonText}>+ Add New Habit</Text>
        </TouchableHighlight> 
      </View>      
    );
  }
});

var styles = StyleSheet.create({
  container: {

  },
  listContainer: {
    
  },
  btnContainer: {
    
  },
  createButtonText: {
    textAlign: 'center',
    color: 'red',
  }
});

module.exports = HabitList;
