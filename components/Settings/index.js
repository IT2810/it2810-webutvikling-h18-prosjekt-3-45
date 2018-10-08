import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import GoalToast from './GoalToast';

class Settings extends Component {
  render() {
    return (
      <Container>
        <Content>
          <GoalToast />
        </Content>
      </Container>
    );
  }
}

export default Settings;
