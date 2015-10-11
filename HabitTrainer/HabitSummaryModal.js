'use strict';

var React = require('react-native');
var helpers = require('./helper/helpers.js');

var {
  Modal,
  StyleSheet,
  SwitchIOS,
  Text,
  TouchableHighlight,
  View
} = React;


var Button = React.createClass({
  getInitialState: function() {
    return {
      active: false,
    };
  },

  _onHighlight: function() {
    this.setState({active: true});
  },

  _onUnhighlight: function() {
    this.setState({active: false});
  },

  render: function() {
    var colorStyle = {
      color: this.state.active ? '#fff' : '#000',
    };
    return (
      <TouchableHighlight
        onHideUnderlay={this._onUnhighlight}
        onPress={this.props.onPress}
        onShowUnderlay={this._onHighlight}
        style={[styles.button, this.props.style]}
        underlayColor="#a9d9d4">
          <Text style={[styles.buttonText, colorStyle]}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
});

var HabitSummaryModal = React.createClass({
  getInitialState: function() {
    return {
      modalVisible: false
    };
  },

  _setModalVisible: function(visible) {
    this.setState({modalVisible: visible});
  },

  // _toggleAnimated: function() {
  //   this.setState({animated: !this.state.animated});
  // },

  // _toggleTransparent: function() {
  //   this.setState({transparent: !this.state.transparent});
  // },

  render: function() {
    var modalBackgroundStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    };
    var innerContainerTransparentStyle = {backgroundColor: '#fff', padding: 20};

    return (
      <View>
        <Modal
          animated={true}
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={[styles.container, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
              <Text>model test</Text>
              <Button
                onPress={this._setModalVisible.bind(this, false)}
                style={styles.modalButton}>
                Close
              </Button>
            </View>
          </View>
        </Modal>
        <Button onPress={this._setModalVisible.bind(this, true)}>
            {this.state.nextHabit}
        </Button>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    borderRadius: 10,
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    flex: 1,
    height: 44,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
  },
});

module.exports = HabitSummaryModal;