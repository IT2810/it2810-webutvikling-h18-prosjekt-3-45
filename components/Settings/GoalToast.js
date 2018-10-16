import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, ListItem, Right, Left, Text, Toast } from 'native-base';
import NumericInput from 'react-native-numeric-input';
import { isToday } from 'date-fns';
import { setGoalEnabled, setTodoGoal } from '../../features/settings/actions';
import { settings } from '../../features/settings/reducers';

export class GoalToast extends Component {
  componentDidUpdate(prevProps) {
    const goal = this.props.settings.todoGoal;

    if (
      prevProps !== this.props &&
      this.props.settings.goalEnabled &&
      goal > 0
    ) {
      const done = this.props.todos.filter(todo => isToday(todo.finished))
        .length;

      if (done === goal) {
        Toast.show({
          text: `You're being really productive today!`,
          duration: 4000,
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
              <NumericInput
                onChange={this.props.setTodoGoal}
                initValue={this.props.settings.todoGoal}
                step={1}
                editable={false}
                minValue={0}
                rounded
                valueType="integer"
                rightButtonBackgroundColor="#ddd"
                leftButtonBackgroundColor="#e5e5e5"
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
