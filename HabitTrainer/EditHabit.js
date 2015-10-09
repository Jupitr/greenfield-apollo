'use strict';
 
var React = require('react-native');
 
var {
  StyleSheet,
  NavigatorIOS,
  Component, 
  View,
  Text
} = React;
 
var EditHabit = React.createClass ({
  render: function(){
  console.log(this.props.selectedHabit.habit);
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Test -- display on edit page
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

module.exports = EditHabit;
