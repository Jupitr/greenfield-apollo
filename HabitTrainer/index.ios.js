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

var {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  Component
} = React;

var HabitTrainer = React.createClass({
  
  getInitialState: function() {
    return {
      selectedTab: 'home'  
    };    
  },

  render: function() {
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
