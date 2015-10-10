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

var Tech = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <Image 
        style={styles.avatar}
        source={{uri: 'http://red-badger.com/blog/wp-content/uploads/2015/04/react-logo-1000-transparent.png'}}
        />
        <Image 
        style={styles.largerAvatar}
        source={{uri: 'http://www.invokemedia.com/wp-content/uploads/2015/07/angular.png'}}
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
    width: 50,
    height: 50
  },
  largerAvatar: {
    width: 100,
    height: 100
  }
});

module.exports = Tech;