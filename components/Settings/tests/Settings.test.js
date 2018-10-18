import React from 'react';
import renderer from 'react-test-renderer';
import { Settings } from '../index';

jest.mock('../GoalToast', () => () => 'GoalToast');

describe('Settings', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Settings />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
