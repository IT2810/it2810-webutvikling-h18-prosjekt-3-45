import React, { Component } from 'react';
import { Container, Text, Button } from 'native-base';
import { StyleSheet, View } from 'react-native';
import Tasks from '../Tasks';
import TodoAdder from '../TodoAdder';

export default class TaskScreen extends Component {
  static navigationOptions = {
    title: 'Tasks',
  };

  // Whether the user has selected the completed tasks tab or not.
  state = {
    selectedCompleted: false,
  };

  handleTabSelect = state => {
    this.setState({
      selectedCompleted: state,
    });
  };

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.header}>
          <View
            style={[!this.state.selectedCompleted && styles.active, styles.tab]}
          >
            <Button
              style={styles.button}
              transparent
              onPress={() => this.handleTabSelect(false)}
            >
              <Text
                style={[
                  styles.text,
                  !this.state.selectedCompleted && styles.activeText,
                ]}
              >
                Incomplete
              </Text>
            </Button>
          </View>
          <View
            style={[this.state.selectedCompleted && styles.active, styles.tab]}
          >
            <Button
              style={styles.button}
              transparent
              onPress={() => this.handleTabSelect(true)}
            >
              <Text
                style={[
                  styles.text,
                  this.state.selectedCompleted && styles.activeText,
                ]}
              >
                Completed
              </Text>
            </Button>
          </View>
        </View>

        {(!this.state.selectedCompleted && <Tasks showDone={false} />) || (
          <Tasks showDone={true} />
        )}

        {!this.state.selectedCompleted && <TodoAdder />}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  header: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#AAA',
  },

  tab: {
    flex: 1,
  },

  button: {
    justifyContent: 'center',
    width: '100%',
  },

  active: {
    backgroundColor: '#5067FF',
  },

  text: {
    color: '#5067FF',
  },

  activeText: {
    color: '#fff',
  },
});
