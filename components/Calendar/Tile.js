import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import format from 'date-fns/format';

class Tile extends Component {
  render() {
    const doneCount = this.props.todos.filter(todo => todo.done).length;

    return (
      <View
        style={[styles.tile, this.props.index % 7 === 0 && styles.leftTile]}
      >
        <Text style={styles.day}>{format(this.props.day, 'D')}</Text>

        <Text style={styles.badge}>
          {doneCount}/{this.props.todos.length}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tile: {
    width: `${100 / 7}%`,
    padding: 2,
    height: 50,
    position: 'relative',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EEE',
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
