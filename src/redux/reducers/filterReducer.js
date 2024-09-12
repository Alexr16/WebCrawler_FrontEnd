// filterReducer.js
const initialState = '';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload; // Update filter state based on user selection
    default:
      return state;
  }
};

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: filter,
});

export default filterReducer;