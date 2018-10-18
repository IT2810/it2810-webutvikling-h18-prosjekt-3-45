import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, ListItem, Right, Left, Text } from 'native-base';
import NumericInput from 'react-native-numeric-input';
import { setGoalEnabled, setTodoGoal } from '../../features/settings/actions';

export class GoalToast extends Component {
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
                minValue={1}
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
