const initialState = {
  goalEnabled: true,
  todoGoal: '5',
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GOAL_ENABLED':
      return { ...state, goalEnabled: action.enabled };

    case 'SET_TODO_GOAL':
      return { ...state, todoGoal: action.goal };

    case 'REHYDRATE':
      return action.state.settings;

    default:
      return state;
  }
};

export default settings;
