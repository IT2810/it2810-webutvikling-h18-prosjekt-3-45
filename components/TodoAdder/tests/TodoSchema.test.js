import React from 'react';
import renderer from 'react-test-renderer';
import TodoSchema from '../TodoSchema';

describe('TodoAdder', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TodoSchema />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
