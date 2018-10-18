const todo = (state = {}, action) => {
  switch (action.type) {
    // Handle adding of todos and the undoing of deletion of todos.
    case 'ADD_TODO':
    case 'READD_TODO':
      // Simply add the specified information into an object, with some
      // additional default information.
      return {
        ...state,
        text: action.text,
        description: action.description,
        date: action.date,
        id: action.id,
        done: false,

        // These apply only when tracking the pedometer
        creationDate: action.creationDate,
        isPedometer: action.isPedometer,
        stepsGoal: action.stepsGoal,
      };

    case 'UPDATE_TODO':
      // Do not update the todo if the ID does not match.
      if (action.id !== state.id) {
        return state;
      }

      return {
        // Merge the old and the new data.
        ...state,
        ...action.data,
      };

    case 'FINISH_TODO':
      // Do not finish this todo if the ID does not match.
      if (action.id !== state.id) {
        return state;
      }

      return {
        // Mark the todo as finished.
        ...state,
        done: true,
        finished: action.finished,
      };

    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // Add the new todo to the bottom of the list of todos.
      return [...state, todo(undefined, action)];

    case 'READD_TODO':
      // Remove the todo which is marked as finished from the list.
      const filtered = state.filter(todo => todo.id !== action.id);

      return [
        // Readd the old todo in the index in which it used to be.
        ...filtered.slice(0, action.index + 1),
        todo(undefined, action),
        ...filtered.slice(action.index + 1),
      ];

    case 'UPDATE_TODO':
    case 'FINISH_TODO':
      // For these actions, we simply map all todos and
      // pass them the action. The todos check their own
      // identificators and update accordingly.
      return state.map(entry => todo(entry, action));

    case 'DELETE_TODO':
      // Filter away all todos whichc have a different ID than the one to delete.
      return state.filter(entry => entry.id !== action.id);

    case 'REHYDRATE':
      // When data is loaded from AsyncStorage, we add these to the start of
      // the list. Usually, this should mean the new list is equal to the loaded list,
      // but we merge it with the existing todos in case AsyncStorage is really slow,
      // so that the user is somehow able to create extra todos before loading finishes.
      return [...action.state.todos, ...state];

    default:
      return state;
  }
};

export default todos;
