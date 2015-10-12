'use strict';
 
var React = require('react-native');
var moment = require('moment');
var Button = require('apsl-react-native-button'); 
var screen = require('Dimensions').get('window');
 
var {
  StyleSheet,
  NavigatorIOS,
  Component, 
  View,
  Text,
  DatePickerIOS,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
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
      <View style={[styles.container, styles.appBgColor]}>
        <View style={{top: 65}}>
          <TextInput
            style={styles.habitInput}
            onChangeText={(text) => this.setState({habitName: text})}
            placeholder='Habit Name'
            autoCapitalize='characters'
            placeholderTextColor='rgba(200, 200, 200, 0.2)'
            value={this.state.habitName}/>
        </View>
        <View style={{top: 80}}>
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
          

          <TouchableOpacity style={styles.createHabit} onPress={this.createHabit}>
            <Text style={styles.createHabitText}>
              Create Habit
            </Text>
          </TouchableOpacity>

        </View>
      
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    height: screen.height
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
    color: 'rgb(180, 180, 180)',
  },
  topTimeHeadingText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 50,
    color: 'c69037',
  },
  timeHeadingText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 25,
    color: 'c69037',
  },
  selectorText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
    color: '8db063',
  },
  habitInput: {
    borderColor: 'gray',
    height: 80, 
    backgroundColor: 'rgba(0, 20, 40, 0.4)', 
    fontSize: 30,
    padding: 20,
    color: 'rgba(180, 180, 180, 0.8)'
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
  appBgColor: {
    backgroundColor: 'rgba(0, 15, 40, 0.9)'
  },
  createHabit: {  
    marginLeft: 50,
    marginRight: 50,
    position: 'absolute',
    top: 300,
    left: screen.width/2 - 175,
    width: 250,
  },
  createHabitText: {
    fontSize: 25,
    color: 'fe4b66',
    textAlign: 'center'
  },
});

module.exports = CreateHabit;

          // <Button style={styles.createButton}
          //   textStyle={styles.buttonText}
          //   onPress={this.createHabit}>
          //   Create Habit
          // </Button> 
