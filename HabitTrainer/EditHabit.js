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
  render: function() {
    return (
      <View>
        <Text>
          hello
        </Text>
      </View>          
    );
  },
});
 
var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

module.exports = EditHabit;
