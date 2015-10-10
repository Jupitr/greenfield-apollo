'use strict';

var React = require('react-native');
var SettingsList = require('./SettingsList');

var {
  StyleSheet,
  NavigatorIOS,
  Component
} = React;


var Settings = React.createClass ({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
          initialRoute={{
            title: 'Settings',
            component: SettingsList
          }}/
      >            
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = Settings;