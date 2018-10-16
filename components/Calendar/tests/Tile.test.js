import React from 'react';
import renderer from 'react-test-renderer';
import { Tile } from '../Tile';

jest.mock('../../TodoAdder', () => () => 'TodoAdder');

describe('Tile', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Tile todos={[]} day={new Date('Sun, 07 Oct 2018 16:03:43 GMT')} />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
