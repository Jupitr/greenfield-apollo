'use strict';

var React = require('react-native');
var TechStack = require('./TechStack.js');
var Button = require('apsl-react-native-button'); 

var {
  StyleSheet,
  View,
  Text,
  Component,
  Navigator
} = React;

// Look into navigational routes for scenes
var sceneRouter = function(){};

var AboutList = React.createClass({

  techStackRoute: function(){},

  devTeamRoute: function(){},

  render: function() {
    return (
      <View style={styles.container}>
        <Button style={styles.techStackButton}
          textStyle={styles.buttonText}
          // onPress= {
          //   // scene techstack view
            
          // }
        >
          Tech Stack
        </Button>
        <Button style={styles.devTeamButton}
          textStyle={styles.buttonText}
          // onPress={
          //   // scene dev team view
            
          // }
        >
          Development Team
        </Button>
        </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  techStackButton: {
    backgroundColor: '1abc9c'
  },
  devTeamButton: {
    backgroundColor: '3498db'
  },
  buttonText: {
    color: 'white'
  }
});

module.exports = AboutList;