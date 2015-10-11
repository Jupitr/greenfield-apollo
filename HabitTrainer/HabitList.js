'use strict';

var React = require('react-native');
var Swipeout = require('react-native-swipeout');
var moment = require('moment');
var EditHabit = require('./EditHabit.js');
var CreateHabit = require('./CreateHabit.js');
var Button = require('apsl-react-native-button'); 

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

var BASE_URL = 'https://jupitrlegacy.herokuapp.com';
// var BASE_URL = 'http://localhost:8080';
var REQUEST_USER_HABITS_URL = BASE_URL + '/public/users/habits/';
var CHECK_IN_HABIT_URL = BASE_URL + '/public/records/';

// empty object to reference selected row
var activeRow = {};
var activeHabits = 0;
var userHabitRecord;

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
      backgroundColor: '3498db',
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
      backgroundColor: '1abc9c',
      onPress: function() {
        if (activeRow.habit.status === 'completed') {
          return;
        } else if (activeRow.habit.status === 'missed' ||
          activeRow.habit.status === 'failed') {
          AlertIOS.alert(
            'Sorry',
            'You missed the deadline for this habit',
            [
              {text: 'ok', onPress: function() {
                return
              }},
            ]
          )
        } else {
          var habit = activeRow.habit
          habit.status = 'completed';
          var url = CHECK_IN_HABIT_URL + habit._id;
          fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(habit)
          })
          .then((responseData) => {
            console.log(responseData);
            AlertIOS.alert(
              'Nice Work!',
              'Keep it up!',
              [
                {text: 'ok', onPress: function() {
                  self.forceUpdate();
                }},
              ]
            )
          })
          .done();
        }
      }}
    ],
  
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
          passProps: {
            userHabits: self.state.userHabits
          }
        });
      }
    }
    
  },
  
  componentWillReceiveProps: function() {
    this.fetchUserHabits();
  },
  
  fetchUserHabits: function() {
    fetch(REQUEST_USER_HABITS_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log('user habits fetched from server');
        this.setState({
          userHabits: responseData,
          dataSource: this.state.dataSource.cloneWithRows(responseData.habits)
        });
      })
      .done();
  },
  
  renderHabit: function(habit) {
    if (habit.active) {
      activeHabits++;
      if (habit.staus === 'remind'){
        habit.status = 'pending';
      }
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
        <Button style={styles.createHabitButton}
          textStyle={styles.buttonText}
          onPress={this._redirectToCreateHabit}>
          + Add New Habit
        </Button> 
      </View>      
    );
  }
});

var styles = StyleSheet.create({
  container: {
  },
  listContainer: {
    height: 450
  },
  createButtonText: {
    textAlign: 'center',
    color: 'red',
  },
  createHabitButton: {
    backgroundColor: '3498db',
    marginLeft: 50,
    marginRight: 50,
  },
  buttonText: {
    color: 'white'
  }
});

module.exports = HabitList;
