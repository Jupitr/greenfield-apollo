'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  Component,
  NavigatorIOS
} = React;

var Devs = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
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
  }
});

module.exports = Devs;