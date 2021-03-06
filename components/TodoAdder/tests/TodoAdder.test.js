import React from 'react';
import renderer from 'react-test-renderer';
import { TodoAdder } from '../index';

jest.mock('../TodoSchema', () => () => 'TodoSchema');

describe('TodoAdder', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TodoAdder />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
