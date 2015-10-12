'use strict';

var React = require('react-native');
var TechStack = require('./TechStack.js');
var DevTeam = require('./DevTeam.js');
var Button = require('apsl-react-native-button'); 

var {
  StyleSheet,
  View,
  Text,
  Component,
  NavigatorIOS
} = React;

var AboutList = React.createClass({

  techStackRoute: function(){
    this.props.navigator.push({
      title: 'Tech Stack',
      component: TechStack
    })
  },

  devTeamRoute: function(){
    this.props.navigator.push({
      title: 'Developers',
      component: DevTeam
    })
  },

  render: function() {
    return (
      <View style={[styles.container, styles.appBgColor]}>
        <Button style={styles.techStackButton}
          textStyle={styles.buttonText}
          onPress={() => {
            this.techStackRoute();
          }}
        >
          Tech Stack
        </Button>
        <Button style={styles.devTeamButton}
          textStyle={styles.buttonText}
          onPress={() => {
            this.devTeamRoute();
          }}
        >
          Developers
        </Button>
        </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  techStackButton: {
    backgroundColor: '1abc9c'
  },
  devTeamButton: {
    backgroundColor: '3498db'
  },
  buttonText: {
    color: 'white'
  },
  appBgColor: {
    backgroundColor: 'rgba(0, 20, 45, 0.9)'
  },
});

module.exports = AboutList;