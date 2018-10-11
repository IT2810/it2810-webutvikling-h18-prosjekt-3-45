import React from 'react';
import { StyleSheet } from 'react-native';
import Tasks from '../components/Tasks';
import TodoAdder from '../components/TodoAdder';
import {
  Container,
  Header,
  Content,
  Text,
  Footer,
  Card,
  Button,
} from 'native-base';

export default class TaskScreen extends React.Component {
  static navigationOptions = {
    title: 'Tasks',
  };

  // Whether the user has selected the completed tasks tab or not
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
        <Header style={styles.header}>
          <Button transparent onPress={() => this.handleTabSelect(false)}>
            <Text>Incompleted</Text>
          </Button>
          <Button
            title="Complete"
            transparent
            onPress={() => this.handleTabSelect(true)}
          >
            <Text>Completed</Text>
          </Button>
        </Header>
        <Content>
          {(!this.state.selectedCompleted && <Tasks />) || (
            <Text>Completed list here</Text>
          )}
        </Content>
        <Footer transparent style={styles.footer}>
          <TodoAdder />
        </Footer>
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
    justifyContent: 'space-around',
  },
  footer: {
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
});
