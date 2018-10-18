/**
 * Set whether or not the feature for a target amount of
 * daily todos is finished.
 */
export const setGoalEnabled = enabled => ({
  type: 'SET_GOAL_ENABLED',
  enabled,
});

/**
 * Set the target daily amount of todos to finish.
 */
export const setTodoGoal = goal => ({
  type: 'SET_TODO_GOAL',
  goal,
});
