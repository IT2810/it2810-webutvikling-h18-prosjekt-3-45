import React from 'react'
import renderer from 'react-test-renderer'

import TodoAdder from '../../todoadder';

it('renders correctly', () => {
  const tree = renderer.create(<TodoAdder/>).toJSON();
  expect(tree).toMatchSnapShot();
});
