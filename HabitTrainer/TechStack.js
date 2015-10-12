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

  reactNativeModal: function(){
    this.refs.reactNative.open();
  },

  angularModal: function(){
    this.refs.angular.open();
  },

  bowerModal: function(){
    this.refs.bower.open();
  },

  nodeModal: function(){
    this.refs.node.open();
  },
  
  gruntModal: function(){
    this.refs.grunt.open();
  },
  
  mongoModal: function(){
    this.refs.mongo.open();
  },
  
  npmModal: function(){
    this.refs.npm.open();
  },
  
  d3Modal: function(){
    this.refs.d3.open();
  },
  
  momentModal: function(){
    this.refs.moment.open();
  },

  render: function() {

    return (
      <View style={[styles.containerMain, styles.appBgColor]}>
        <View style={styles.container}>
          <Button onPress={this.reactNativeModal}>
            <Image 
            style={styles.avatar}
            source={{uri: 'http://red-badger.com/blog/wp-content/uploads/2015/04/react-logo-1000-transparent.png'}}
            />
          </Button>
          <Button onPress={this.angularModal}>
            <Image 
            style={styles.avatar}
            source={{uri: 'http://www.invokemedia.com/wp-content/uploads/2015/07/angular.png'}}
            onPress={this.openModal2}
            />
          </Button>
          <Button onPress={this.bowerModal}>
            <Image 
            style={styles.avatar}
            source={{uri: 'https://camo.githubusercontent.com/aad5f0385a2d8524cb366a1bad62bc74e797743a/687474703a2f2f692e696d6775722e636f6d2f516d47485067632e706e67'}}
            />
          </Button>
        </View>
        <View style={styles.container2}>
          <Button onPress={this.nodeModal}>
            <Image 
              style={styles.avatar}
              source={{uri: 'https://www.airpair.com/static/img/pages/postscomp/prize-node.js.png'}}
            />
          </Button>
          <Button onPress={this.gruntModal}>
            <Image 
              style={styles.avatar}
              source={{uri: 'https://i.cloudup.com/bDkmXyEmr5.png'}}
            />
          </Button>
          <Button onPress={this.mongoModal}>
            <Image 
              style={styles.avatar}
              source={{uri: 'http://columbia-openacademy.github.io/images/mongodb-logo.png'}}
            />
          </Button>
        </View>
        <View style={styles.container3}>
          <Button onPress={this.npmModal}>
            <Image 
              style={styles.avatar}
              source={{uri: 'https://nwm.julianxhokaxhiu.com/img/logos/npm.png'}}
            />
          </Button>
          <Button onPress={this.d3Modal}>
            <Image 
              style={styles.avatar}
              source={{uri: 'https://www.gramwire.com/images/logos/logo_d3js.png'}}
            />
          </Button>
          <Button onPress={this.momentModal}>
            <Image 
              style={styles.avatar}
              source={{uri: 'http://uploads.coderpower.com/5476166292f24ac826d97719/552a197435aadfd954ccdedc/version0/logo/logo%20copy.png'}}
            />
          </Button>
        </View>

        <Modal style={styles.modal} position={'center'} ref={"reactNative"}>
          <Text style={styles.textHeader}>React Native</Text>
          <View style={styles.modalView}>
            <Text style={styles.textInfo}>We utilized React Native as our framework for building this mobile app because we wanted
            the performance of a native application.... TODO</Text>
          </View>
        </Modal>
        <Modal style={styles.modal} position={'center'} ref={"angular"}>
          <Text style={styles.textHeader}>Angular</Text>
        </Modal>
        <Modal style={styles.modal} position={'center'} ref={"bower"}>
          <Text style={styles.textHeader}>Bower</Text>
        </Modal>
        <Modal style={styles.modal} position={'center'} ref={"node"}>
          <Text style={styles.textHeader}>Node</Text>
        </Modal>
        <Modal style={styles.modal} position={'center'} ref={"grunt"}>
          <Text style={styles.textHeader}>Grunt</Text>
        </Modal>
        <Modal style={styles.modal} position={'center'} ref={"mongo"}>
          <Text style={styles.textHeader}>MongoDB</Text>
        </Modal>
        <Modal style={styles.modal} position={'center'} ref={"npm"}>
          <Text style={styles.textHeader}>Npm</Text>
        </Modal>
        <Modal style={styles.modal} position={'center'} ref={"d3"}>
          <Text style={styles.textHeader}>D3</Text>
        </Modal>
        <Modal style={styles.modal} position={'center'} ref={"moment"}>
          <Text style={styles.textHeader}>Moment</Text>
        </Modal>

      </View>
    );
  }
});

var styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: 'column',
  },
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
    marginRight: 20,
    marginTop: 50
  },
  container3: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 175   
  },
  avatar: {
    width: 100,
    height: 100
  },
  modal: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 300,
    width: 300,
    backgroundColor: '#1abc9c',
  },
  modalView: {
    flex: 1,
    marginTop: 30,
    marginRight: 20,
    marginLeft: 20,
    justifyContent: 'flex-start'
  },
  textHeader: {
    color: "white",
    fontSize: 25,
    lineHeight: 40
  },
  textInfo: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  appBgColor: {
    backgroundColor: 'rgba(0, 20, 45, 0.9)'
  },
});

module.exports = Tech;