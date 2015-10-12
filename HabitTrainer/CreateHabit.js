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
var POST_USER_HABIT_URL = BASE_URL + '/public/users/habits/';
 
var CreateHabit = React.createClass ({
  getInitialState: function() {
    return {
      habitName: '',
      reminderTime: moment().add(30 - moment(new Date()).minutes() % 30, 'minutes'),
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
  
  createHabit: function() {
    if (this.state.habitName === '') {
      AlertIOS.alert(
        'Please Enter a Habit Name',
        '',
        [
          {text: 'ok', onPress: function() {
            return
          }},
        ]
      )    
    } else {
      var habitName = this.state.habitName;
      var reminderTime = moment(this.state.reminderTime).toISOString();
      var dueTime = moment(this.state.dueTime).toISOString();
      this.props.userHabits.habits.push(
        {
          status: 'pending',
          habitName: habitName,
          reminderTime: reminderTime,
          dueTime: dueTime,
          streakRecord: 0,
          streak: 0,
          failedCount: 0,
          checkinCount: 0,
          failed: false,
          reminded: false,
          active: true
        }
      )
      var habit = {
        habitName: habitName,
        reminderTime: reminderTime,
        dueTime: dueTime
      }
      fetch(POST_USER_HABIT_URL, {
        method: 'POST',
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
    };
    // console.log(this.props.userHabits.habits);
    this.props.navigator.pop();
  },
  
  render: function(){
    return (
      <View style={styles.habitInput}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({habitName: text})}
          placeholder='Habit Name'
          value={this.state.habitName}
        />
                
        <Text style={styles.topTimeHeadingText}>Remind Me At</Text>
        <View style={styles.dateContainer}>
          <TouchableHighlight
            onPress={this.subtractReminderTime}
            underlayColor="transparent">
            <Text style={styles.selectorText}>-</Text>
          </TouchableHighlight>
          <Text style={styles.text}> { moment(this.state.reminderTime).format('hh:mm') + '\n' + moment(this.state.reminderTime).format('A') } </Text>
          <TouchableHighlight
            onPress={this.addReminderTime}
            underlayColor="transparent">
            <Text style={styles.selectorText}>+</Text>
          </TouchableHighlight>
        </View>     
        
        <Text style={styles.timeHeadingText}>Due At</Text>
        <View style={styles.dateContainer}>
          <TouchableHighlight
            onPress={this.subtractDueTime}
            underlayColor="transparent">
            <Text style={styles.selectorText}>-</Text>
          </TouchableHighlight>
          <Text style={styles.text}> { moment(this.state.dueTime).format('hh:mm') + '\n' + moment(this.state.dueTime).format('A') } </Text>
          <TouchableHighlight
            onPress={this.addDueTime}
            underlayColor="transparent">
            <Text style={styles.selectorText}>+</Text>
          </TouchableHighlight>
        </View>
        
        <Button style={styles.createButton}
          textStyle={styles.buttonText}
          onPress={this.createHabit}>
          Create Habit
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
   dateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
    color: 'black',
  },
  topTimeHeadingText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 50,
    color: 'black',
  },
  timeHeadingText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 25,
    color: 'black',
  },
  selectorText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
    color: 'black',
  },
  habitInput: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    marginTop: 160,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 200
  },
  buttonText: {
    color: 'white'
  },
  createButton: {
    backgroundColor: '3498db',
    marginTop: 35,
    marginBottom: 15,
    marginLeft: 50,
    marginRight: 50,
  },
});

module.exports = CreateHabit;
