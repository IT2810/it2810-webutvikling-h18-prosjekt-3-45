import React, { Component, Fragment } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { Text } from 'native-base';
import format from 'date-fns/format';
import DayModal from './DayModal';
import MonthPicker from './MonthPicker';

class Tile extends Component {
  state = {
    modalVisible: false,
  };

  handleShowModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  handleHideModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

  render() {
    const doneCount = this.props.todos.filter(todo => todo.done).length;

    return (
      <Fragment>
        <DayModal
          todos={this.props.todos}
          visible={this.state.modalVisible}
          onClose={this.handleHideModal}
          day={this.props.day}
        />

        <TouchableHighlight
          style={[
            styles.tileButton,
            this.props.index % 7 === 0 && styles.leftTile,
          ]}
          underlayColor="#CCE6FF"
          onPress={this.handleShowModal}
        >
          <View style={styles.tile}>
            <Text style={styles.day}>{format(this.props.day, 'D')}</Text>

            {this.props.todos.length > 0 && (
              <Text style={styles.badge}>
                {doneCount}/{this.props.todos.length}
              </Text>
            )}
          </View>
        </TouchableHighlight>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  highlight: {
    backgroundColor: '#FFF',
  },

  tileButton: {
    width: `${100 / 7}%`,
    padding: 2,
    height: 50,
    position: 'relative',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },

  tile: {
    flex: 1,
  },

  leftTile: {
    borderLeftWidth: 0,
  },

  day: {
    fontWeight: 'bold',
  },

  badge: {
    position: 'absolute',
    right: 2,
    bottom: 2,
  },
});

export default Tile;
