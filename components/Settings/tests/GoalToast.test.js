import React from 'react';
import renderer from 'react-test-renderer';
import { GoalToast } from '../GoalToast';

describe('GoalToast', () => {
  const tree = renderer
    .create(
      <GoalToast
        settings={{
          goalEnabled: true,
        }}
        setTodoGoal={jest.fn()}
      />,
    )
    .toJSON();

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
