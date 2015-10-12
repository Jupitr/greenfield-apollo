'use strict';

var React = require('react-native');
var screen = require('Dimensions').get('window');
var UIImagePickerManager = require('NativeModules').UIImagePickerManager;

var {
  StyleSheet,
  View,
  ListView,
  Text,
  TouchableOpacity,
  PixelRatio,
  Image,
  NativeModules: {
    UIImagePickerManager
  }
} = React;

var HabitSummaryHead = React.createClass ({
  getInitialState: function(){
    return {
      avatarSource: null,
      userName: 'lain.lai.jiang',
      dateJoined: '10/06/2015'
    }
  },

  render: function(){
    return (
        <View style={{flexDirection: 'row', margin: 10}}>
          <TouchableOpacity onPress={this.avatarTapped}>
            <View style={styles.icon}>
            { this.state.avatarSource === null ? <Text style={{color: 'rgba(255, 255, 255, 0.6)'}}>Select a Photo...</Text> :
              <Image style={styles.icon} source={this.state.avatarSource} />
            }
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.content}>
              Hello, {this.state.userName}! 
            </Text>
            <Text style={styles.contentSmall}>
              Training since {this.state.dateJoined}
            </Text>
          </View>
        </View>
      )
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
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    // borderWidth: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    marginLeft: 20
  },
  contentSmall: {
    // borderWidth: 1,
    fontSize: 12,
    textAlign: 'center',
    margin: 10,
    marginTop: 2,
    color: 'rgba(255, 255, 255, 0.7)',
    marginLeft: 20
  },
  icon: {
    width: 75,
    height: 75,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(200, 200, 200, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

module.exports = HabitSummaryHead;
