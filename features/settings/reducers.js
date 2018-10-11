const initialState = {
  goalEnabled: true,
  todoGoal: 5,
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GOAL_ENABLED':
      return { ...state, goalEnabled: action.enabled };

    case 'SET_TODO_GOAL':
      return { ...state, todoGoal: action.goal };

    case 'REHYDRATE':
      if (action.state.settings) {
        return action.state.settings;
      }

      // This logic is included for backwards compatibility
      // with store saves which do not include settings.
      return initialState;

    default:
      return state;
  }
};

export default settings;
