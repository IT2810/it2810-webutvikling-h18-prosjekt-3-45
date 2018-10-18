// The initial settings state.
const initialState = {
  goalEnabled: true,
  todoGoal: 5,
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    // Take actions for setting whether the goal function is
    // enabled or not, and update the state to use the new flag.
    case 'SET_GOAL_ENABLED':
      return { ...state, goalEnabled: action.enabled };

    // Update the state with the new todo goal.
    case 'SET_TODO_GOAL':
      return { ...state, todoGoal: action.goal };

    // Retrieve the settings which were stored using AsyncStorage.
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
