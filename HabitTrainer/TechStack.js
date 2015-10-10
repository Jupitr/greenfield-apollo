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

var Tech1 = React.createClass({

  render: function() {
    return (
      <View>
      <View style={styles.container}>
        <Image 
        style={styles.avatar}
        source={{uri: 'http://red-badger.com/blog/wp-content/uploads/2015/04/react-logo-1000-transparent.png'}}
        />
        <Image 
        style={styles.largerAvatar}
        source={{uri: 'http://www.invokemedia.com/wp-content/uploads/2015/07/angular.png'}}
        />
        <Image 
        style={styles.avatar}
        source={{uri: 'https://camo.githubusercontent.com/aad5f0385a2d8524cb366a1bad62bc74e797743a/687474703a2f2f692e696d6775722e636f6d2f516d47485067632e706e67'}}
        />
      </View>
      <View style={styles.container2}>
        <Image 
          style={styles.avatar}
          source={{uri: 'https://www.airpair.com/static/img/pages/postscomp/prize-node.js.png'}}
        />
        <Image 
          style={styles.mediumAvatar}
          source={{uri: 'https://i.cloudup.com/bDkmXyEmr5.png'}}
        />
        <Image 
          style={styles.avatar}
          source={{uri: 'https://camo.githubusercontent.com/aad5f0385a2d8524cb366a1bad62bc74e797743a/687474703a2f2f692e696d6775722e636f6d2f516d47485067632e706e67'}}
        />
      </View>
      </View>
    );
  }
});

var Tech2 = React.createClass({

  render: function(){
    return (
      <View style={styles.container2}>
        <Image 
          style={styles.largerAvatar}
          source={{uri: 'http://red-badger.com/blog/wp-content/uploads/2015/04/react-logo-1000-transparent.png'}}
        />
        <Image 
          style={styles.largerAvatar}
          source={{uri: 'http://www.invokemedia.com/wp-content/uploads/2015/07/angular.png'}}
        />
        <Image 
          style={styles.avatar}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/320px-Npm-logo.svg.png'}}
        />
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 200
  },
  container2: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  },
  avatar: {
    width: 50,
    height: 50
  },
  mediumAvatar: {
    width: 100,
    height: 100
  },
  largerAvatar: {
    width: 100,
    height: 100
  }
});

module.exports = Tech1;