import uuidv4 from 'uuid/v4';

export const addTodo = (text, description, date) => ({
  type: 'ADD_TODO',
  id: uuidv4(),
  text,
  description,
  date,
});

export const addPedometerTodo = (text, description, date, stepsGoal) => ({
  type: 'ADD_TODO',
  id: uuidv4(),
  creationDate: new Date().toGMTString(),
  isPedometer: true,
  text,
  description,
  date,
  stepsGoal,
});

export const updateTodo = (id, data) => ({
  type: 'UPDATE_TODO',
  id,
  data,
});

export const finishTodo = id => ({
  type: 'FINISH_TODO',
  id,
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id,
});
