import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import {
  Container,
  Card,
  Content,
  Button,
  Footer,
  Textarea,
  Input,
  Text,
  Switch,
} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import format from 'date-fns/format';

class TodoSchema extends Component {
  constructor(props) {
    super(props);

    /**
     * All the state which is stored in this component.
     * @type {{isDateTimePickerVisible: boolean, text: string, description: string, date: string}}
     */
    this.state = {
      isDateTimePickerVisible: false, // Whether or not the data picker is visible.
      text: '', // The value for the TODO title text input.
      description: '', // The value for the TODO description input.
      date: '', // The value for the TODO date.
      isPedometer: false,
      stepsGoal: 10000,
    };

    // This component can be used to both edit todos and to create new ones.
    // If a todo to be edited is provided, we need to update the initial state.
    const curTodo = this.props.currentTodo;

    // Update the state of schema with current todo values if existing.
    if (curTodo !== undefined) {
      this.state = {
        text: curTodo.text,
        description: curTodo.description,
        date: curTodo.date,
        isPedometer: curTodo.isPedometer,
        stepsGoal: curTodo.stepsGoal,
      };
    }
  }

  /**
   * Shows the DateTime picker.
   */
  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  /**
   * Hides the DateTime picker.
   */
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handlePedometerSwitch = input => {
    this.setState({
      isPedometer: input,
    });
  };

  handleStepGoal = input => {
    this.setState({
      stepsGoal: input,
    });
  };

  /**
   * Sets the title state based on input from the user.
   * @param title string The updated title.
   */
  handleTitlePicked = title => {
    this.setState({
      text: title,
    });
  };

  /**
   * Sets the description state based on input from the user.
   * @param description string The updated description for the todo.
   */
  handleDescriptionPicked = description => {
    this.setState({
      description: description,
    });
  };

  /**
   * Sets the date state based on input from the user.
   * @param date string The newly picked date.
   */
  handleDatePicked = date => {
    this.setState({
      // The date needs to be stored as a GMT string so that we
      // can correctly parse it at a later point in time.
      date: date.toGMTString(),
    });

    this.hideDateTimePicker();
  };

  validate = () => {
    return !!this.state.text;
  };

  /**
   * Closes the modal window. This is used when the cancel button is pressed.
   */
  cancelForm = () => {
    this.props.setModalVisibility(false);
  };

  /**
   * Clears the currently chosen date.
   */
  clearDate = () => {
    this.setState({
      date: '',
    });
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.content}>
          <Text style={styles.title}>
            {this.props.currentTodo ? 'Edit todo' : 'Create a new todo'}
          </Text>

          <Text style={[styles.label, styles.mainLabel]}>Title</Text>

          <Input
            underlineColorAndroid="transparent"
            style={styles.input}
            returnKeyType="done"
            onChangeText={this.handleTitlePicked}
            value={this.state.text}
          />

          <Text style={styles.warning}>
            {!this.state.text && 'This field is required'}
          </Text>

          <Text style={[styles.label, styles.mainLabel]}>Description</Text>

          <Textarea
            rowSpan={3}
            underlineColorAndroid="transparent"
            style={[styles.input, styles.multiLine]}
            onChangeText={this.handleDescriptionPicked}
            value={this.state.description}
          />

          <Text style={[styles.label, styles.mainLabel]}>Date</Text>

          <Card transparent style={styles.dateCont}>
            <Button onPress={this.showDateTimePicker}>
              <Text>Add date</Text>
            </Button>

            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
              datePickerModeAndroid="spinner"
              mode="date"
            />

            <Text style={styles.text}>
              {this.state.date
                ? format(this.state.date, 'ddd, Do MMM YYYY')
                : 'No date selected'}
            </Text>

            <Button
              disabled={!this.state.date}
              danger={!!this.state.date}
              onPress={this.clearDate}
            >
              <Text>Clear</Text>
            </Button>
          </Card>

          <Card transparent style={styles.dateCont}>
            <Text style={styles.label}>Enable pedometer</Text>
            <Switch
              style={styles.field}
              value={this.state.isPedometer}
              onValueChange={this.handlePedometerSwitch}
            />
          </Card>

          {this.state.isPedometer && (
            <Card transparent style={styles.dateCont}>
              <Text style={styles.label}>Step goal</Text>

              <NumericInput
                onChange={this.handleStepGoal}
                initValue={this.state.stepsGoal}
                step={1000}
                editable={false}
                minValue={1000}
                totalWidth={160}
                sepratorWidth={0}
                inputStyle={styles.numInput}
                iconStyle={{ color: '#fff' }}
                rounded
                valueType="integer"
                rightButtonBackgroundColor="#5067FF"
                leftButtonBackgroundColor={
                  this.state.stepsGoal === 1000 ? '#ccc' : '#5067FF'
                }
              />
            </Card>
          )}
        </Content>

        <Footer transparent style={styles.btnContainer}>
          <Button
            disabled={!this.validate()}
            primary={!!this.validate()}
            onPress={() =>
              this.props.saveForm({
                text: this.state.text,
                description: this.state.description,
                date: this.state.date,
                isPedometer: this.state.isPedometer,
                stepsGoal: this.state.stepsGoal,
              })
            }
          >
            <Text>Save</Text>
          </Button>

          <Button danger onPress={() => this.cancelForm(false)}>
            <Text>Cancel</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },

  title: {
    alignSelf: 'center',
    fontSize: 24,
  },

  mainLabel: {
    marginTop: 20,
  },

  label: {
    fontSize: 20,
    color: '#777',
    fontWeight: 'bold',
  },

  input: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
  },

  multiLine: {
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 7,
    borderRadius: 5,
  },

  numInput: {
    width: 60,
    fontSize: 16,
    borderWidth: 0,
  },

  warning: {
    color: '#f00',
  },

  dateCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EEE',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#CCC',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },

  field: {
    marginTop: 20,
  },
});

export default TodoSchema;
