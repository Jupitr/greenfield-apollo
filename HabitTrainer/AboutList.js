'use strict';

var React = require('react-native');
var TechStack = require('./TechStack.js');
var DevTeam = require('./DevTeam.js');
var Button = require('apsl-react-native-button'); 
var Icon = require('react-native-vector-icons/Ionicons');

var {
  StyleSheet,
  View,
  Text,
  Component,
  NavigatorIOS,
  TouchableOpacity,
  Image
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
        <TouchableOpacity style={styles.techStackButton}
          onPress={() => {
            this.techStackRoute();
          }}
        >
          <Text style={styles.buttonText}>Tech Stack</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.devTeamButton}
          onPress={() => {
            this.devTeamRoute();
          }}
        >
          <Text style={styles.buttonText}>Developers</Text>
        </TouchableOpacity>
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
  },
  devTeamButton: {
    marginTop: 50
  },
  buttonText: {
    fontSize: 25,
    color: 'fe4b66',
    textAlign: 'center'
  },
  appBgColor: {
    backgroundColor: 'rgba(0, 20, 45, 0.9)'
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginRight: 35
  },
});

module.exports = AboutList;