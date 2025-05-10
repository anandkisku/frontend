const initialState = {
  isLoggedIn: false, // Initial state for isLoggedIn
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true }; // Create a new state object
    case 'LOGOUT':
      return { ...state, isLoggedIn: false }; // Create a new state object
    default:
      return state; // Return current state if no action matches
  }
};