import React from 'react';
import renderer from 'react-test-renderer';
import { TodoList } from '../TodoList';
import todos from '../../features/todos/reducers';
import { addTodo } from '../../features/todos/actions';

const mockTodos = todos(undefined, addTodo('Test todo'));

// snapshot test for completed todolist
describe('TodoList', () => {
  const tree = renderer
    .create(<TodoList showDone={true} todos={mockTodos} />)
    .toJSON();

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});

// snapshot test for incompleted todolist
describe('TodoList', () => {
  const tree = renderer
    .create(<TodoList showDone={false} todos={mockTodos} />)
    .toJSON();

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
