import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, ListItem, Right, Left, Text, Toast } from 'native-base';
import { TextInput } from 'react-native';
import { isToday } from 'date-fns';
import { setGoalEnabled, setTodoGoal } from '../../features/settings/actions';

class GoalToast extends Component {
  componentDidUpdate(prevProps) {
    const goal = parseInt(this.props.settings.todoGoal, 10);

    if (
      prevProps !== this.props &&
      this.props.settings.goalEnabled &&
      goal > 0
    ) {
      const done = this.props.todos.filter(todo => isToday(todo.finished))
        .length;

      if (done === goal) {
        Toast.show({
          text: `AAww uyess mojfiweoiwef`,
          duration: 3000,
        });
      }
    }
  }

  render() {
    return (
      <Fragment>
        <ListItem>
          <Left>
            <Text>Enable daily todo goal</Text>
          </Left>

          <Right>
            <Switch
              value={this.props.settings.goalEnabled}
              onValueChange={this.props.setGoalEnabled}
            />
          </Right>
        </ListItem>

        {this.props.settings.goalEnabled && (
          <ListItem>
            <Left>
              <Text>Daily todo amount</Text>
            </Left>

            <Right>
              <TextInput
                keyboardType="numeric"
                value={this.props.settings.todoGoal}
                onChangeText={this.props.setTodoGoal}
              />
            </Right>
          </ListItem>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  settings: state.settings,
});

const mapDispatchToProps = {
  setGoalEnabled,
  setTodoGoal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoalToast);
