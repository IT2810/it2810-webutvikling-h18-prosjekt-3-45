import React, { Component, Fragment } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { Text } from 'native-base';
import format from 'date-fns/format';
import isToday from 'date-fns/is_today';
import DayModal from './DayModal';

export class Tile extends Component {
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
          underlayColor="#007fff"
          onPress={this.handleShowModal}
        >
          <View
            style={[
              styles.tile,
              this.props.active && styles.activeTile,
              isToday(this.props.day) && styles.today,
            ]}
          >
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
    height: 50,
    position: 'relative',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },

  tile: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    padding: 2,
  },

  leftTile: {
    borderLeftWidth: 0,
  },

  activeTile: {
    backgroundColor: '#FFF',
  },

  today: {
    backgroundColor: '#e0efff',
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
