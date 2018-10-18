import todos from '../reducers';
import * as actions from '../actions';

jest.mock('uuid/v4', () => {
  let counter = 0;

  return () => {
    counter += 1;
    return counter;
  };
});

describe('todos reducer', () => {
  it('should return an empty array initially', () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  it('should add a todo', () => {
    expect(
      todos(
        undefined,
        actions.addTodo(
          'Todo text',
          'Todo description',
          'Thu, 18 Oct 2018 17:42:18 GMT',
        ),
      ),
    ).toMatchSnapshot();
  });

  const state = todos(
    undefined,
    actions.addTodo(
      'Todo text',
      'Todo description',
      'Thu, 18 Oct 2018 17:42:18 GMT',
    ),
  );

  it('should add new todo to the end of the array', () => {
    expect(
      todos(
        state,
        actions.addTodo(
          'Second todo',
          'Second todo description',
          'Thu, 18 Oct 2018 17:45:39 GMT',
        ),
      ),
    ).toMatchSnapshot();
  });

  it('should mark the specified todo as done', () => {
    expect(todos(state, actions.finishTodo(state[0].id))[0].done).toEqual(true);
  });

  it('should remove the given todo from the list', () => {
    expect(todos(state, actions.deleteTodo(state[0].id)).length).toEqual(0);
  });
});
