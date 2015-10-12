'use strict';

var React = require('react-native');
var Modal = require('react-native-modalbox');
var Button = require('react-native-button');

var {
  StyleSheet,
  View,
  Text,
  Component,
  NavigatorIOS,
  Image
} = React;

var Tech = React.createClass({

  reactNativeModal: function(id){
    this.refs.reactNative.open();
  },

  render: function() {

    return (
      <View>
        <View style={styles.container}>
          <Button onPress={this.reactNativeModal}>
            <Image 
            style={styles.avatar}
            source={{uri: 'http://red-badger.com/blog/wp-content/uploads/2015/04/react-logo-1000-transparent.png'}}
            />
          </Button>
          <Button>
            <Image 
            style={styles.avatar}
            source={{uri: 'http://www.invokemedia.com/wp-content/uploads/2015/07/angular.png'}}
            onPress={this.openModal2}
            />
          </Button>
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
            style={styles.avatar}
            source={{uri: 'https://i.cloudup.com/bDkmXyEmr5.png'}}
          />
          <Image 
            style={styles.avatar}
            source={{uri: 'http://columbia-openacademy.github.io/images/mongodb-logo.png'}}
          />
        </View>
        <View style={styles.container3}>
          <Image 
            style={styles.avatar}
            source={{uri: 'https://nwm.julianxhokaxhiu.com/img/logos/npm.png'}}
          />
          <Image 
            style={styles.avatar}
            source={{uri: 'https://www.gramwire.com/images/logos/logo_d3js.png'}}
          />
          <Image 
            style={styles.avatar}
            source={{uri: 'http://uploads.coderpower.com/5476166292f24ac826d97719/552a197435aadfd954ccdedc/version0/logo/logo%20copy.png'}}
          />
        </View>

        <Modal style={styles.modal} position={'center'} ref={"reactNative"}>
          <Text style={styles.text}>React Native blah blah</Text>
        </Modal>

      </View>
    );
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
    marginTop: 150
  },
  container2: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  container3: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20    
  },
  avatar: {
    width: 100,
    height: 100
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300
  },
  text: {
    color: "black",
    fontSize: 16
  }
});

module.exports = Tech;