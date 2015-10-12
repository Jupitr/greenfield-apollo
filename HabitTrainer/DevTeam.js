'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var Modal = require('react-native-modalbox');

var {
  StyleSheet,
  View,
  Text,
  Component,
  NavigatorIOS,
  Image
} = React;

var Devs = React.createClass({

  lainModal: function(){
    this.refs.lain.open();
  },
  kevinModal: function(){
    this.refs.kevin.open();
  },
  donModal: function(){
    this.refs.don.open();
  },
  melindaModal: function(){
    this.refs.melinda.open();
  },

      // sample placeholder image
        // create dev team images in list?
        // Their role in the project
  render: function() {
    return (
      <View style={[styles.containerMain, styles.appBgColor]}>
        <View style={styles.container}>
          <Button onPress={this.lainModal}>
          <Image 
          style={styles.avatar}
          source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/000/1cd/000/299302b.jpg'}}
          />
          </Button>
          <Button onPress={this.kevinModal}>
          <Image 
          style={styles.avatar}
          source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAU1AAAAJGVjZTAwZmQwLWE3MWQtNDgwZC1iMGIxLWNkNGJhYjZjOGIwOQ.jpg'}}
          />
          </Button>
        </View>
        <View style={styles.container3}>
          <Button onPress={this.donModal}>
          <Image 
          style={styles.avatar}
          source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAZwAAAAJGY3MWY1MjE3LWEyNjEtNDMwMC1hZmQyLTdmY2MyZjlmNGZkNA.jpg'}}
          />
          </Button>
          <Button onPress={this.melindaModal}>
          <Image 
          style={styles.avatar}
          source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAJDAAAAJGNiMDNhNDQzLTQ3NTUtNDZkOS1iZjFhLWJiZDhiNjg2ZDM1Zg.jpg'}}
          />
          </Button>
        </View>
        <Modal style={styles.modal} position={'center'} ref={"lain"}>
          <Text style={styles.textHeader}>Lain Jiang</Text>
          <Text>Product Owner</Text>
          <View style={styles.modalView}>
            <Text style={styles.textInfo}>As Product Owner, Lain organized the project's workflow from the ground up. She implemented the home view of the mobile application,
            utilizing google authentication to provide a login portal as well as integrating twitter into the home page.</Text>
          </View>
        </Modal>
        <Modal style={styles.modal} position={'center'} ref={"kevin"}>
          <Text style={styles.textHeader}>Kevin Lee</Text>
          <Text>Scrum Master</Text>
          <View style={styles.modalView}>
            <Text style={styles.textInfo}>As Scrum Master, Kevin implemented continuous integration and deployment with Grunt and Heroku. In addition, he created the About page for the mobile application.</Text>
          </View>
        </Modal>
        <Modal style={styles.modal} position={'center'} ref={"don"}>
          <Text style={styles.textHeader}>Don Steinert</Text>
          <Text>Full Stack Software Engineer</Text>
          <View style={styles.modalView}>
            <Text style={styles.textInfo}>Don was the driving force on development for the mobile version of Habit Trainer. He integrated native swiping and notifications, as well as connecting the mobile application to our deployed server.</Text>
          </View>
        </Modal>
        <Modal style={styles.modal} position={'center'} ref={"melinda"}>
          <Text style={styles.textHeader}>Melinda Budde</Text>
          <Text>Full Stack Software Engineer</Text>
          <View style={styles.modalView}>
            <Text style={styles.textInfo}>Melinda was instrumental in creating and polishing the landing page for our product. In addition to the front end development, she designed our product's logo.</Text>
          </View>
        </Modal>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 175
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
    marginTop: 100
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
  },
  textHeader: {
    color: "white",
    fontSize: 30,
    lineHeight: 40
  },
  modal: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#1abc9c',
    height: 300,
    width: 300,
    borderRadius: 50
  },
  modalView: {
    flex: 1,
    marginTop: 30,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    justifyContent: 'flex-start'
  },
  textInfo: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  textTitle: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center'
  },
  appBgColor: {
    backgroundColor: 'rgba(0, 20, 45, 0.9)'
  },
});

module.exports = Devs;