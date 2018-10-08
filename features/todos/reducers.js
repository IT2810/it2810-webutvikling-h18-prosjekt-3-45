const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'READD_TODO':
      return {
        ...state,
        text: action.text,
        description: action.description,
        date: action.date,
        id: action.id,
        done: false,
      };

    case 'UPDATE_TODO':
      if (action.id !== state.id) {
        return state;
      }

      return {
        ...state,
        ...action.data,
      };

    case 'FINISH_TODO':
      if (action.id !== state.id) {
        return state;
      }

      return {
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
      return [...state, todo(undefined, action)];

    case 'READD_TODO':
      return [
        ...state.slice(0, action.index),
        todo(undefined, action),
        ...state.slice(action.index),
      ];

    case 'UPDATE_TODO':
    case 'FINISH_TODO':
      return state.map(entry => todo(entry, action));

    case 'DELETE_TODO':
      return state.filter(entry => entry.id !== action.id);

    case 'REHYDRATE':
      return [...action.state.todos, ...state];

    default:
      return state;
  }
};

export default todos;
