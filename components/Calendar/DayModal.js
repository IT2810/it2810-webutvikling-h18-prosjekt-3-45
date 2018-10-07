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
                <Icon name="md-arrow-back" style={{ color: '#FFF' }} />
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
