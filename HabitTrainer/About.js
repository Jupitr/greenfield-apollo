'use strict';

var React = require('react-native');
var AboutList = require('./AboutList');

var {
  StyleSheet,
  NavigatorIOS,
  Component
} = React;


var About = React.createClass ({
  render: function() {
    return (
      <NavigatorIOS
        barTintColor="#F4F4F4"
        style={styles.container}
          initialRoute={{
            title: 'About',
            component: AboutList
          }}/>            
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = About;