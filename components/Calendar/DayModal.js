import React, { Component } from 'react';
import { Modal } from 'react-native';
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

          <Content />
        </Container>
      </Modal>
    );
  }
}

export default DayModal;
