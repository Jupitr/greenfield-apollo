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
      <View>
        <View style={styles.container}>
          <Image 
          style={styles.avatar}
          source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAU1AAAAJGVjZTAwZmQwLWE3MWQtNDgwZC1iMGIxLWNkNGJhYjZjOGIwOQ.jpg'}}
          />
          <Text>Kevin Lee</Text>
        </View>
        <View style={styles.container1}>
          <Image 
          style={styles.avatar}
          source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAU1AAAAJGVjZTAwZmQwLWE3MWQtNDgwZC1iMGIxLWNkNGJhYjZjOGIwOQ.jpg'}}
          />
        </View>
        <View style={styles.container2}>
          <Image 
          style={styles.avatar}
          source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAU1AAAAJGVjZTAwZmQwLWE3MWQtNDgwZC1iMGIxLWNkNGJhYjZjOGIwOQ.jpg'}}
          />
        </View>
        <View style={styles.container3}>
          <Image 
          style={styles.avatar}
          source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAU1AAAAJGVjZTAwZmQwLWE3MWQtNDgwZC1iMGIxLWNkNGJhYjZjOGIwOQ.jpg'}}
          />
        </View>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 100
  },
  container1: {
    flex: 2,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 27
  },
  container2: {
    flex: 3,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 27
  },
  container3: {
    flex: 4,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 27
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});

module.exports = Devs;