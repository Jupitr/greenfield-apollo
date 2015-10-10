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
  TouchableHighlight
} = React;

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
  },

  render: function() {
    // if (!this.state.user) {
    //   return (
    //     <View style={styles.container}>
    //       <TouchableHighlight onPress={() => {this._signIn(); }}>
    //         <View style={{backgroundColor: '#f44336', flexDirection: 'row'}}>
    //           <View style={{padding: 12, borderWidth: 1/2, borderColor: 'transparent', borderRightColor: 'white'}}>
    //             <Icon
    //               name='ion|social-googleplus'
    //               size={24}
    //               color='white'
    //               style={{width: 24, height: 24}}
    //             />
    //           </View>
    //           <Text style={{color: 'white', padding: 12, marginTop: 2, fontWeight: 'bold'}}>Sign in with Google+</Text>
    //         </View>
    //       </TouchableHighlight>
    //     </View>
    //   );
    // }
    // else {
      return (
        <TabBarIOS
          tintColor="white"
          barTintColor="#black">
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
    // }
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HabitTrainer', () => HabitTrainer);
