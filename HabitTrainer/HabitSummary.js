'use strict';

var React = require('react-native');
var PageControl = require('react-native-page-control');
var screen = require('Dimensions').get('window');
var KDSocialShare = require('NativeModules').KDSocialShare;
console.log('-----',  KDSocialShare);

var helpers = require('./helper/helpers.js');
var HabitSummaryHead = require('./HabitSummaryHead.js');

var {
  StyleSheet,
  View,
  ScrollView,
  ListView,
  Text,
  Component,
  PixelRatio,
  NavigatorIOS,
  TouchableOpacity,
  Modal,
} = React;

var HABITS = [
  {habitName: 'Submit a Pull Request', streak: 5, checkinCount: 25, failedCount: 3, reminderTime: '2:30 PM', dueTime: '4:30 PM', streakRecord: 15, active:true},
  {habitName: 'Complete a Pomodoro', streak: 10, checkinCount: 20, failedCount: 4, reminderTime: '2:30 PM', dueTime: '8:30 PM', streakRecord: 20, active:true},
  {habitName: 'Workout', streak: 8, checkinCount: 15, failedCount: 2, reminderTime: '2:30 PM', dueTime: '4:30 PM', streakRecord: 8, active:true}
];

var USER = {
  name: 'Pied Piper',
  dateJoined: '10/06/15',
  points: 420
};

var BASE_URL = 'https://jupitrlegacy.herokuapp.com';
// var BASE_URL = 'http://localhost:8080';
var REQUEST_USER_HABITS_URL = BASE_URL + '/public/users/habits';

var HabitSummary = React.createClass ({
  getInitialState: function(){
    return {
      userName: 'Public User',
      userHabits: null,
      activeHabits: null,
      accomplishedHabits: null,
      modalVisible: false,
      accomplishedSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      completedSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      pendingSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      missedSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  },

  componentDidMount: function() {
    this.fetchUserHabits();
  },

  componentWillUnmount: function() {
    window.clearInterval(this._interval);
  },

  fetchUserHabits: function() {
    fetch(REQUEST_USER_HABITS_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log('_______________user habits fetched from server______________');
        this.setState({
          userHabits: responseData
        });

        this.setState(this._returnSortedHabits(this.state.userHabits.habits));
        this.setState({
          accomplishedSource: this.state.accomplishedSource.cloneWithRows(this.state.accomplishedHabits || []),
          completedSource: this.state.completedSource.cloneWithRows(this.state.completedHabits || []),
          pendingSource: this.state.pendingSource.cloneWithRows(this.state.pendingHabits || []),
          missedSource: this.state.missedSource.cloneWithRows(this.state.missedHabits || [])
        });
        this._processNextHabit(this.state.activeHabits);  
      })
      .done();
  },

  _returnSortedHabits: function (habits) {
    var accomplished = helpers.sortHabits(habits)[0].length ? helpers.sortHabits(habits)[0] : null;
    var active = helpers.sortHabits(habits)[1].length ? helpers.sortHabits(habits)[1] : null;
    var completed = helpers.sortHabits(habits)[2].length ? helpers.sortHabits(habits)[2] : null;
    var pending = helpers.sortHabits(habits)[3].length ? helpers.sortHabits(habits)[3] : null;
    var missed = helpers.sortHabits(habits)[4].length ? helpers.sortHabits(habits)[4] : null;

    console.log('missed ------', missed);

    return {
      accomplishedHabits: accomplished,
      activeHabits: active,
      completedHabits: completed,
      pendingHabits: pending,
      missedHabits: missed
    };
  },

  _processNextHabit: function(habits) {
    var next = helpers.nextHabit(habits);
    var diff = next[2];
    var dueTime = next[1];
    var nextHabitHolder = next[0];
    var nextWidthHolder = 0;
    if (diff && dueTime) {
      nextWidthHolder = helpers.mapToDomain([0, dueTime],[0, 250], diff, true);
    }
    this.setState({nextHabit: nextHabitHolder, nextWidth: nextWidthHolder});
    this._interval = window.setInterval(this.onTick, 60000);
  },

  _tweet : function() {

    KDSocialShare.tweet({
        'text': 'I have now 420 points from Habit Trainer!',
        'link': 'https://jupitrlegacy.herokuapp.com/',
        //'imagelink':
        //'image': 
      },
      (results) => {
        console.log(results);
      }
    );
  },

  _showHabitModal: function(bool) {
    console.log('-----clicked');
    this.setState({modalVisible: bool});
    console.log('after setting visible', this.state.modalVisible);
  },

  onTick: function() {
    this._processNextHabit(this.state.activeHabits);
  },

  onScroll: function(event){
    var offsetX = event.nativeEvent.contentOffset.x,
        pageWidth = screen.width - 10;
    this.setState({
      currentPage: Math.floor((offsetX - pageWidth / 2) / pageWidth) + 1
    });
  },

  renderAllHabits: function(self) {
    return (
      <View style={styles.modalList}>
        {this._checkHabitList(self, 'completed')}
        {this._checkHabitList(self, 'pending')}
        {this._checkHabitList(self, 'missed')}
      </View>
    );
  },

  renderList: function(habit) {
    return (
      <View style={[styles.accomplishedList, {backgroundColor: 'rgba(10, 10, 10, 0.4)', borderColor: 'rgba(255, 255, 255, 0.6)'}]}>
        <Text style={{textAlign: 'center', color: 'white'}}>{habit.habitName}</Text>
      </View>
    );
  },

  _checkAccomplished: function(self) {
    if (self.state.accomplishedHabits === null) {
      return (
        <View style={[styles.container, {height: 90}]}>
          <Text>You have not formed habits.</Text>
          <Text>Time to get moving!</Text>
        </View>
      );
    }
    else {
      return (
        <ListView dataSource = {this.state.accomplishedSource}
        renderRow = {this.renderList}/>
      )
    }
  },

  _checkHabitList: function(self, queryStr) {
    var set = queryStr + 'Habits';
    var source = queryStr + 'Source';
    if (self.state[set] !== null) {
      return (
        <View style={styles.modalContainer}>
          <Text style={{color: 'white'}}>
            {queryStr.toUpperCase()}
          </Text>
          <ListView dataSource = {self.state[source]}
          renderRow = {this.renderList}/>
        </View>
      )
    }
  },

  render: function(){
    var modalBackgroundStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.7)'
    };
    var innerContainerTransparentStyle = {backgroundColor: 'rgba(0, 0, 0, 0 )', padding: 20};

    return (
      <View style={styles.container}>
        <View>
          <Modal
            animated={true}
            transparent={true}
            visible={this.state.modalVisible}>
            <View style={[styles.container, modalBackgroundStyle]}>
              <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                <View style={{margin: 20}}>
                  <TouchableOpacity
                    onPress={this._showHabitModal.bind(this, false)}
                    style={styles.modalButton}>
                    <Text style={{color: 'white'}}>Close</Text>
                  </TouchableOpacity>
                </View>
                {this.renderAllHabits(this)}
              </View>
            </View>
          </Modal>
        </View>

        <HabitSummaryHead/>

        <View style={styles.scrollContainer}>
          <ScrollView 
            ref="ad" 
            pagingEnabled={true} 
            horizontal={true} 
            vertical={false}
            showsHorizontalScrollIndicator={false} 
            bounces={false} 
            onScroll={this.onScroll}
            scrollEventThrottle={16}>
            <View style={{width: screen.width}}>
              <TouchableOpacity onPress={this._tweet}>
                <View style={styles.pointsCir}>
                  <Text style={styles.points}>
                    {USER.points}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.accomplishedListContainer}>
              <Text style={styles.content}>
                Habits You've Formed
              </Text>

              {this._checkAccomplished(this)}

            </View>
            <View style={{width: screen.width}}>
              <View style={styles.pointsCir}>
                <Text style={styles.points}>
                  badges?!?!?
                </Text>
              </View>
            </View>
          </ScrollView>
          <PageControl 
            style={{position:'absolute', left:0, right:0, bottom:10}} 
            numberOfPages={3} 
            currentPage={this.state.currentPage} 
            hidesForSinglePage={true} 
            pageIndicatorTintColor='rgba(30, 30, 30, 0.2)' 
            indicatorSize={{width:8, height:8}} 
            currentPageIndicatorTintColor='rgba(0, 0, 0, 0.4)' />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.content}>
            Next Up
          </Text>
        </View>
        <TouchableOpacity onPress={this._showHabitModal.bind(this, true)}>
          <View>
            <View style={[styles.overlay,{width: this.state.nextWidth}]}>
            </View>
            <Text style={styles.next}>
              {this.state.nextHabit}
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
});

var test = 50;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    // borderWidth: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  contentSmall: {
    // borderWidth: 1,
    fontSize: 12,
    textAlign: 'center',
    margin: 10,
  },
  icon: {
    width: 75,
    height: 75,
    borderWidth: 1 / PixelRatio.get(),
  },
  next: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    width: 250,
    height: 39,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  pointsCir: {
    position: 'absolute',
    width: 200,
    height: 200,
    left: screen.width / 2 - 100,
    top: -50 ,
    borderRadius: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(255, 10, 0, 0.2)'
  },
  scrollContainer: {
    width:screen.width, 
    height:250,
    marginTop: 10
  },
  points: {
    fontSize: 50,
    textAlign: 'center',
  }, 
  overlay: {
    top: 0, 
    position: 'absolute', 
    height: 39, 
    backgroundColor: 'rgba(255, 255, 0, 0.9)'
  },
  accomplishedListContainer: {
    top: -30,
    width: screen.width, 
    justifyContent: 'center', 
    alignItems: 'center',    
  },
  accomplishedList: {
    width: 200,
    padding: 5,
    margin: 5,
    borderWidth: 1
  },
  modalContainer: {
    justifyContent: 'center', 
    alignItems: 'center',  
  },
  modalList: {
    backgroundColor: '1abc9c',
    borderWidth: 1 / PixelRatio.get(),
    borderRadius: 10,
    padding: 20,
  }
});

module.exports = HabitSummary;
