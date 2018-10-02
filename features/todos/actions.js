import uuidv4 from 'uuid/v4';

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: uuidv4(),
  text,
});

export const finishTodo = id => ({
  type: 'FINISH_TODO',
  id,
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id,
});