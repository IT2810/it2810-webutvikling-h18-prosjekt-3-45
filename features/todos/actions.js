import uuidv4 from 'uuid/v4';

/**
 * Action for creating a new todo using the provided information.
 */
export const addTodo = (text, description, date) => ({
  type: 'ADD_TODO',
  // Generate an UUID instead of using a counter.
  id: uuidv4(),
  text,
  description,
  date,
});

/**
 * Action for creating a new todo, with additional information
 * for pedometer configuration.
 */
export const addPedometerTodo = (text, description, date, stepsGoal) => ({
  type: 'ADD_TODO',
  // Generate an UUID instead of using a counter.
  id: uuidv4(),
  creationDate: new Date().toGMTString(),
  isPedometer: true,
  text,
  description,
  date,
  stepsGoal,
});

/**
 * Action used for updating an existing todo with a given id. The data
 * provided is merged with the existing todo information.
 */ ('');
export const updateTodo = (id, data) => ({
  type: 'UPDATE_TODO',
  id,
  data,
});

/**
 * Marks the given todo as finished. A timestamp for when
 * the todo was finished is added.
 */
export const finishTodo = id => ({
  type: 'FINISH_TODO',
  id,
  finished: new Date().toGMTString(),
});

/**
 * Deletes the specified todo.
 */
export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id,
});
