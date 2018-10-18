import React from 'react';
import renderer from 'react-test-renderer';
import PedometerTodo from '../PedometerTodo';
import todos from '../../../features/todos/reducers';
import { addPedometerTodo } from '../../../features/todos/actions';
import { handleOpen, handleDelete, handlePress } from '../TodoList';

const mockTodo = todos(
  undefined,
  addPedometerTodo('Test todo', 'This is a test', new Date(), 756),
);

describe('Todo', () => {
  const tree = renderer
    .create(
      <PedometerTodo
        key={'78'}
        onOpen={handleOpen}
        onDelete={handleDelete}
        onPress={handlePress}
        todo={mockTodo}
      />,
    )
    .toJSON();

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
