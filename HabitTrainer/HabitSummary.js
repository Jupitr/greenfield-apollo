'use strict';

var React = require('react-native');
var helpers = require('./helper/helpers.js');
var UIImagePickerManager = require('NativeModules').UIImagePickerManager;

var {
  StyleSheet,
  View,
  Text,
  Component,
  Image
} = React;

var HABITS = [
  {habitName: 'Submit a Pull Request', streak: 5, checkinCount: 25, failedCount: 3, reminderTime: '2:30 PM', dueTime: '4:30 PM', streakRecord: 15, active:true},
  {habitName: 'Complete a Pomodoro', streak: 10, checkinCount: 20, failedCount: 4, reminderTime: '2:30 PM', dueTime: '8:30 PM', streakRecord: 20, active:true},
  {habitName: 'Workout', streak: 8, checkinCount: 15, failedCount: 2, reminderTime: '2:30 PM', dueTime: '4:30 PM', streakRecord: 8, active:true}
];

var user = {
  name: 'Pied Piper',
  dateJoined: '10/06/15'
}

var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();

var HabitSummary = React.createClass ({
  render: function(){
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image
        style={styles.icon}
        source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
        />
        <View>
          <Text style={styles.content}>
            Hello, {user.name}! 
          </Text>
          <Text style={styles.contentSmall}>
            Training since {user.dateJoined}
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.content}>
          Next Up
        </Text>
      </View>
      <View>
        <Text style={styles.content}>
          {helpers.nextHabit(HABITS)}
        </Text>
      </View>
      <View>

      </View>
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
    // borderWidth: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  contentSmall: {
    // borderWidth: 1,
    fontSize: 12,
    textAlign: 'center',
    margin: 10,
  },
  icon: {
    width: 75,
    height: 75,
  },
});

module.exports = HabitSummary;
