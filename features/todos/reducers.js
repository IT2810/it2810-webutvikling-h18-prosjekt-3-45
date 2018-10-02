const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        text: action.text,
        description: action.description,
        date: action.date,
        id: action.id,
        done: false,
      };

    case 'FINISH_TODO':
      if (action.id !== state.id) {
        return state;
      }

      return {
        ...state,
        done: true,
      };

    default:
      return state;
  }
};

const todos = (state = [], action) => {  
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];

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