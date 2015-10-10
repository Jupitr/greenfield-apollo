'use strict';

var React = require('react-native');
var helpers = require('./helper/helpers.js');
var UIImagePickerManager = require('NativeModules').UIImagePickerManager;

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Component,
  PixelRatio,
  NavigatorIOS,
  WebView,
  TouchableOpacity,
  Image,
  NativeModules: {
    UIImagePickerManager
  }
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
  getInitialState: function(){
    return {
      avatarSource: null
    };
  },

  avatarTapped: function() {
  // Specify any or all of these keys
    var options = {
      title: 'Select Avatar',
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Photo...',
      takePhotoButtonHidden: false,
      chooseFromLibraryButtonTitle: 'Choose from Library...',
      chooseFromLibraryButtonHidden: false,
      returnBase64Image: false,
      returnIsVertical: false,
      quality: 0.2
    };
    UIImagePickerManager.showImagePicker(options, (responseType, response) => {
      console.log(`Response Type = ${responseType}`);

      if (responseType !== 'cancel') {
        var source;
        if (responseType === 'data') { // New photo taken OR passed returnBase64Image true -  response is the 64 bit encoded image data string
          source = {uri: 'data:image/jpeg;base64,' + response, isStatic: true};
        } else { // Selected from library - response is the URI to the local file asset
          source = {uri: response.replace('file://', ''), isStatic: true};
        }

        this.setState({
          avatarSource: source
        });
      }
    });
  },

  render: function(){
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={this.avatarTapped}>
          <View style={styles.icon}>
          { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
            <Image style={styles.icon} source={this.state.avatarSource} />
          }
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.content}>
            Hello, {user.name}! 
          </Text>
          <Text style={styles.contentSmall}>
            Training since {user.dateJoined}
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.content}>
          Next Up
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.content && styles.next}>
          {helpers.nextHabit(HABITS)}
        </Text>
      </View>
    </View>
  );
}
});


var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
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
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  next: {
    borderWidth: 1,
    padding: 10
  },
  vector: {
    height: 500,
    width: 500,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderWidth: 1,
    flexDirection: 'row'
  }
});

AppRegistry.registerComponent('HabitSummary', () => HabitSummary);

module.exports = HabitSummary;
