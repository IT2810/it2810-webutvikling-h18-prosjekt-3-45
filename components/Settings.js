import React, { Component } from 'react';

import {
  Container,
  Content,
  Switch,
  ListItem,
  Right,
  Left,
  Text,
} from 'native-base';
import { StyleSheet, TextInput } from 'react-native';

export default class Settings extends Component {
  state = {
    isDailyTodo: true,
    countTodo: '5',
  };

  handleCountTodo = countTodo => {
    this.setState({
      countTodo: countTodo,
    });
  };

  handleIsDailyTodo = enabled => {
    this.setState({
      isDailyTodo: enabled,
    });
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <ListItem>
            <Left>
              <Text>Enable daily todo goal</Text>
            </Left>
            <Right>
              <Switch
                value={this.state.isDailyTodo}
                onValueChange={this.handleIsDailyTodo}
              />
            </Right>
          </ListItem>
          {this.state.isDailyTodo && (
            <ListItem>
              <Left>
                <Text>Daily todo amount</Text>
              </Left>
              <Right>
                <TextInput
                  keyboardType="numeric"
                  value={this.state.countTodo}
                  onChange={this.handleCountTodo}
                />
              </Right>
            </ListItem>
          )}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
