import React from 'react';
import renderer from 'react-test-renderer';
import Todo from '../Todo';
import todos from '../../features/todos/reducers';
import { addTodo } from '../../features/todos/actions';
import { handleOpen, handleDelete, handlePress } from '../TodoList';

const mockTodo = todos(undefined, addTodo('Test todo'));

describe('Todo', () => {
  const tree = renderer
    .create(
      <Todo
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
