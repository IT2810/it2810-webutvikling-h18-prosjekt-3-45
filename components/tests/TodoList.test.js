import React from 'react';
import renderer from 'react-test-renderer';
import { TodoList } from '../TodoList';
import todos from '../../features/todos/reducers';
import { addTodo } from '../../features/todos/actions';

const mockTodos = todos(undefined, addTodo('Test todo'));

describe('TodoList', () => {
  const tree = renderer
    .create(<TodoList showDone={true} todos={mockTodos} />)
    .toJSON();

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});

describe('TodoList', () => {
  const tree = renderer
    .create(<TodoList showDone={false} todos={mockTodos} />)
    .toJSON();

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
