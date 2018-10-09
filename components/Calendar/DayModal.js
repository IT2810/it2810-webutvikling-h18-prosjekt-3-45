import React, { Component } from 'react';
import { Modal, View } from 'react-native';
import { Text } from 'native-base';
import format from 'date-fns/format';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Left,
  Right,
  Button,
  Icon,
} from 'native-base';
import TodoList from '../TodoList';
import { todoStyles } from '../Todo';
import { tasksStyles } from '../Tasks';

class DayModal extends Component {
  render() {
    return (
      <Modal visible={this.props.visible} onRequestClose={this.props.onClose}>
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={this.props.onClose}>
                <Icon ios="ios-arrow-back" android="md-arrow-back" />
              </Button>
            </Left>

            <Body>
              <Title>{format(this.props.day, 'DD MMM YYYY')}</Title>
            </Body>

            <Right />
          </Header>

          <Content>
            <View style={todoStyles.todo}>
              <Text style={tasksStyles.sectionTitle}>Unfinished</Text>
            </View>

            <TodoList todos={this.props.todos.filter(todo => !todo.done)} />

            <View style={todoStyles.todo}>
              <Text style={tasksStyles.sectionTitle}>Finished</Text>
            </View>

            <TodoList todos={this.props.todos.filter(todo => todo.done)} />
          </Content>
        </Container>
      </Modal>
    );
  }
}

export default DayModal;
