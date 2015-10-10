'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  Component
} = React;


var Settings = React.createClass ({
  render: function(){
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Settings
      </Text>
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

module.exports = HabitSummary;