import settings from '../reducers';
import * as actions from '../actions';

describe('settings reducer', () => {
  it('should return the correct initial state', () => {
    expect(settings(undefined, {})).toEqual({
      goalEnabled: true,
      todoGoal: 5,
    });
  });

  it('should update the goal enabled switch', () => {
    expect(settings(undefined, actions.setGoalEnabled(false))).toEqual({
      goalEnabled: false,
      todoGoal: 5,
    });
  });

  it('should update the target number of todos', () => {
    expect(settings(undefined, actions.setTodoGoal(3))).toEqual({
      goalEnabled: true,
      todoGoal: 3,
    });
  });
});
