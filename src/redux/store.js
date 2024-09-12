import { configureStore } from '@reduxjs/toolkit';
import entryReducer from './reducers/entryReducer';
import filterReducer from './reducers/filterReducer';

const store = configureStore({
  reducer: {
    entries: entryReducer,
    filter: filterReducer,
  },
});

export default store;