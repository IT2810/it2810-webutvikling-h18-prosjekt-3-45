import React from 'react';
import renderer from 'react-test-renderer';
import { GoalToast } from '../GoalToast';

describe('TodoList', () => {
  const tree = renderer.create(<GoalToast />).toJSON();

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
