'use strict';

var React = require('react-native');
var Swipeout = require('react-native-swipeout');
var moment = require('moment');
var EditHabit = require('./EditHabit.js');
var CreateHabit = require('./CreateHabit.js');

var {
  StyleSheet,
  View,
  ListView,
  Text,
  TouchableHighlight,
  Component,
  AlertIOS
} = React;

// var HABITS = [
//   {habitName: 'Submit a Pull Request', streak: 5, checkinCount: 25, failedCount: 3, reminderTime: '2:30 PM', dueTime: '4:30 PM', streakRecord: 15, active:true},
//   {habitName: 'Complete a Pomodoro', streak: 10, checkinCount: 20, failedCount: 4, reminderTime: '2:30 PM', dueTime: '4:30 PM', streakRecord: 20, active:true},
//   {habitName: 'Workout', streak: 8, checkinCount: 15, failedCount: 2, reminderTime: '2:30 PM', dueTime: '4:30 PM', streakRecord: 8, active:true}
// ]

var REQUEST_USER_HABITS_URL = 'https://jupitrlegacy.herokuapp.com/public/users/habits';

// empty object to reference selected row
var activeRow = {};

var activeHabits = 0;

var HabitList = React.createClass ({
  
  getInitialState: function() {
    console.log(this.state);
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      userName: 'Public User',
      userHabits: null
    };
  },
  
  componentDidMount: function() {
    
    this.fetchUserHabits();
    
    var self = this;
    
    this.editBtn = [{
      text: 'Edit',
      backgroundColor: 'orange',
      onPress: function(){
        self.props.navigator.push({
          title: 'Edit Habit',
          component: EditHabit,
          passProps: {
            selectedHabit: activeRow
          }
        });
      }
    }]
    
    this.completeBtn = [{
      text: 'Did It!',
      backgroundColor: 'green',
      onPress: function() {
        activeRow.habit.status = 'completed';
        AlertIOS.alert(
          'Nice Work!',
          'Keep it up!',
          [
            {text: 'ok', onPress: function() {
              self.setState();
            }},
          ]
        )
      }}
    ]
  
    this._redirectToCreateHabit = function() {
      if (activeHabits >= 3) {
        AlertIOS.alert(
          'Three Habit Limit Reached',
          'Please deactivate an existing habit if you wish to add a new one.',
          [
            {text: 'ok', onPress: function() {
              return;
            }},
          ]
        )
      } else {
        self.props.navigator.push({
          title: 'Create Habit',
          component: CreateHabit,
        });
      }
    }
    
  },
  
  fetchUserHabits: function() {
    fetch(REQUEST_USER_HABITS_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log('user habits fetched from server');
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.habits)
        });
        userHabits: responseData;   
      })
      .done();
  },
  
  renderHabit: function(habit) {
    if (habit.active) {
      activeHabits++;
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
            <Text>Status: {habit.status}</Text>
            <Text>Due: { moment(habit.dueTime).format('hh:mm a')}</Text>
          </View>
        </Swipeout>
      );
    } else {
      return (<View></View>);
    }
  },

  render: function() {
    activeHabits = 0;
    return (
      <View style={styles.container}>
        <ListView style={styles.listContainer}
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
    height: 300
  },
  btnContainer: {
  },
  createButtonText: {
    textAlign: 'center',
    color: 'red',
  }
});

module.exports = HabitList;
