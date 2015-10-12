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
          source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/000/1cd/000/299302b.jpg'}}
          />
          <Image 
          style={styles.avatar}
          source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAU1AAAAJGVjZTAwZmQwLWE3MWQtNDgwZC1iMGIxLWNkNGJhYjZjOGIwOQ.jpg'}}
          />
        </View>
        <View style={styles.text}>
          <Text>Lain Jiang</Text>
          <Text>Kevin Lee</Text>
        </View>
        <View style={styles.textInfo}>
          <Text>Product Owner</Text>
          <Text>Scrum Master</Text>
        </View>
        <View style={styles.container3}>
          <Image 
          style={styles.avatar}
          source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAZwAAAAJGY3MWY1MjE3LWEyNjEtNDMwMC1hZmQyLTdmY2MyZjlmNGZkNA.jpg'}}
          />
          <Image 
          style={styles.avatar}
          source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAJDAAAAJGNiMDNhNDQzLTQ3NTUtNDZkOS1iZjFhLWJiZDhiNjg2ZDM1Zg.jpg'}}
          />
        </View>
        <View style={styles.text}>
          <Text>Don Steinert</Text>
          <Text>Melinda Budde</Text>
        </View>
        <View style={styles.textInfo}>
          <Text>Full Stack Engineer</Text>
          <Text>Full Stack Engineer</Text>
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
    marginTop: 125
  },
  container1: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 27
  },
  container2: {
    flex: 3,
    flexDirection: 'column',
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
    width: 150,
    height: 150,
    borderRadius: 50,
    marginRight: 35
  },
  text: {
    fontSize: 12,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 27
  },
  textInfo: {
    fontSize: 12,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  }
});

module.exports = Devs;