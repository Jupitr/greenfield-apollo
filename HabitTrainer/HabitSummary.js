'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  Component
} = React;


var HabitSummary = React.createClass ({
  render: function(){
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Test -- display on home
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
