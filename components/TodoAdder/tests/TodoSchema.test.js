import React from 'react';
import renderer from 'react-test-renderer';
import TodoSchema from '../TodoSchema';

describe('TodoSchema', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TodoSchema />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
