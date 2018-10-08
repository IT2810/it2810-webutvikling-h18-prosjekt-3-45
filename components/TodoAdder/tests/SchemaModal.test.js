import React from 'react';
import renderer from 'react-test-renderer';
import SchemaModal from '../SchemaModal';

describe('SchemaModal', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SchemaModal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
