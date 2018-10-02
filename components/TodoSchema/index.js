import React, {Component} from 'react'
import { FormLabel, Button, FormInput, FormValidationMessage } from 'react-native-elements'
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker'

export default class TodoSchema extends Component {

  /**
   * States:
   * isDateTimePickerVisible is whether the datepicker modal is visible or not
   * title is the textinput from user
   * description is the textinput from user (optional)
   * date is the dateinput from user (optional)
   *
   * @type {{isDateTimePickerVisible: boolean, title: string, description: string, date: string}}
   */
  state = {
    isDateTimePickerVisible: false,
    title: "",
    description: "",
    date: "",
  };

  /**
   * The DateTimePicker is taken from mmazzarolo at Github, but this has been modified to match
   * our personal interests
   * Source: https://github.com/mmazzarolo/react-native-modal-datetime-picker
   */
  // Toggle states which decides whether the datetimepicker should be visible
  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  // Handle title
  handleTitlePicked = (title) => {
    this.setState({
      title: title,
    })
  };

  // Handles description
  handleDescriptionPicked = (description) => {
    this.setState({
      description: description,
    })
  };

  // handles the picked date
  handleDatePicked = (date) => {
    this.setState({
      date: date.toLocaleString(),
    });
    this.hideDateTimePicker();
  };

  saveForm = (frmObject) => {
    if (frmObject.title === "") {
      alert("empty title")
    } else {
      this.props.saveForm(frmObject)
    }
  }

  // Function for handling cancel button for form
  cancelForm = (state) => {
    this.props.hideModule(state);
  }

  render() {
    return (
      <ScrollView>
        <Text>Create a new todo</Text>
        <FormLabel>
          Title
        </FormLabel>
        <FormInput
          placeholder={"Do delivery .."}
          onChangeText={this.handleTitlePicked}
          value={this.state.title}
        />
        { this.state.title === "" &&
          <FormValidationMessage>
            {'This field is required'}
          </FormValidationMessage>
        }
        <FormLabel>
          Description
        </FormLabel>
        <FormInput
          placeholder={"Also remember to bring the books ..."}
          onChangeText={this.handleDescriptionPicked}
          value={this.state.description}
          multiline={true}
        />
        <FormLabel>Date</FormLabel>
        <TouchableOpacity onPress={this.showDateTimePicker}>
          <Text>{'CalenderICON'}</Text>
        </TouchableOpacity>
        <View>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
            mode={'datetime'}
            datePickerModeAndroid={'calendar'}
          />
          <Text>{this.state.date}</Text>
        </View>

        <View>
          <Button title={'Save'} onPress={() => this.saveForm({
            title: this.state.title,
            description: this.state.description,
            date: this.state.date,
          })} />

          <Button title={'Cancel'} onPress={() => this.cancelForm(false)}/>
        </View>
      </ScrollView>
    )
  }
}