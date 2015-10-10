'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  Component,
  NavigatorIOS,
  Image
} = React;

var Devs = React.createClass({

      // sample placeholder image
        // create dev team images in list?
        // Their role in the project
  render: function() {
    return (
      <View style={styles.container}>
        <Image 
        style={styles.avatar}
        source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAU1AAAAJGVjZTAwZmQwLWE3MWQtNDgwZC1iMGIxLWNkNGJhYjZjOGIwOQ.jpg'}}
        />
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
  avatar: {
    width: 100,
    height: 100
  }
});

module.exports = Devs;