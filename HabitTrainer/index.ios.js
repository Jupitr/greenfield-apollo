/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Habits = require('./Habits');
var Home = require('./Home');
var About = require('./About');
var Icon = require('react-native-vector-icons/Ionicons');
var GoogleSignin = require('react-native-google-signin');

var {
  NativeAppEventEmitter,
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  Component,
  TouchableHighlight,
  StatusBarIOS,
  Image
} = React;

StatusBarIOS.setStyle(1);
StatusBarIOS.setStyle('light-content');

var HabitTrainer = React.createClass({
  
  getInitialState: function() {
    return {
      selectedTab: 'home',
      user: null
    };    
  },
  
  componentDidMount: function() {
    this._configureOauth(
      '680744037017-cdfhgdavv68iomp2imi3rkf5q5b5d41r.apps.googleusercontent.com', // from .plist file
      []// SCOPES // array of authorization names: eg ['https://www.googleapis.com/auth/calendar'] for requesting access to user calendar
    );
    this._signOut();
  },

  render: function() {
    if (!this.state.user) {
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 28, width: 450, textAlign: 'center', backgroundColor: 'rgba(20, 20, 20, 0.3)', color: 'rgb(200, 200, 200)', padding: 25, marginTop: 2, marginBottom: 20, fontWeight: 'bold'}}>HABIT TRAINER</Text>
          <TouchableHighlight onPress={() => {this._signIn(); }}>
            <View style={{top: 80, backgroundColor: 'fe4b66', flexDirection: 'row'}}>
              <Text style={{width: 200, textAlign: 'center', color: 'white', padding: 12, marginTop: 2, fontWeight: '400'}}>Sign in with Google+</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
    else {
      return (
        <TabBarIOS
          transluscent={true}
          tintColor="fe4b66"
          barTintColor="rgba(0, 20, 40, 0.8)">
          <Icon.TabBarItem
            title="Home"
            iconName="ios-home-outline"
            selectedIconName="ios-home"
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}>
            <Home/>
          </Icon.TabBarItem>
          <Icon.TabBarItem
            title="Habits"
            iconName="ios-checkmark-outline"
            selectedIconName="ios-checkmark"
            selected={this.state.selectedTab === 'habits'}
            onPress={() => {
              this.setState({
                selectedTab: 'habits',
              });
            }}>
            <Habits/>
          </Icon.TabBarItem>
          <Icon.TabBarItem
            title="About"
            iconName="ios-gear-outline"
            selectedIconName="ios-gear"
            selected={this.state.selectedTab === 'about'}
            onPress={() => {
              this.setState({
                selectedTab: 'about',
              });
            }}>
            <About/>
          </Icon.TabBarItem>
        </TabBarIOS>
      );
    }
  },

  _configureOauth: function(clientId, scopes=[]) {
    GoogleSignin.configure(clientId, scopes);

    NativeAppEventEmitter.addListener('googleSignInError', (error) => {
      console.log('ERROR signin in', error);
    });

    NativeAppEventEmitter.addListener('googleSignIn', (user) => {
      console.log(user);
      this.setState({user: user});
    });

    return true;
  },

  _signIn: function() {
    GoogleSignin.signIn();
  },
  _signOut: function() {
    GoogleSignin.signOut();
    this.setState({user: null});
  }
});
 
//   render: function() {
//     return (
//       <TabBarIOS selectedTab={this.state.selectedTab}>
//         <TabBarIOS.Item
//           selected={this.state.selectedTab === 'home'}
//           systemIcon='featured'
//           onPress={() => {
//             this.setState({
//               selectedTab: 'home'
//             });
//           }}>
//           <Home/>
//         </TabBarIOS.Item>
//         <TabBarIOS.Item
//           selected={this.state.selectedTab === 'habits'}
//           systemIcon='search'
//           onPress={() => {
//             this.setState({
//               selectedTab: 'habits'
//             });
//           }}>
//           <Habits/>
//         </TabBarIOS.Item>
//         <TabBarIOS.Item
//           selected={this.state.selectedTab === 'about'}
//           title='About'
//           onPress={() => {
//             this.setState({
//               selectedTab: 'about'
//             });
//           }}>
//           <About/>
//         </TabBarIOS.Item>
//       </TabBarIOS>
//     );
//   },
// });

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 15, 40, 0.9)',
  },
  bg: {
    resizeMode: 'cover',
    flex: 1
  }
});

AppRegistry.registerComponent('HabitTrainer', () => HabitTrainer);
