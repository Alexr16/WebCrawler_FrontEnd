import { FETCH_ENTRIES_SUCCESS, FETCH_ENTRIES_FAILURE, SCRAPE_SUCCESS, SCRAPE_FAILURE } from '../actions/entryActions';

const initialState = {
  entries: [],
  error: null,
  status: 'idle',
  scrapeMessage: null,
};

const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ENTRIES_SUCCESS:
      return { ...state, entries: action.payload, error: null, status: 'succeeded' };
    case FETCH_ENTRIES_FAILURE:
      return { ...state, error: action.payload, status: 'failed' };
    case SCRAPE_SUCCESS:
      return { ...state, scrapeMessage: action.payload.message };
    case SCRAPE_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default entryReducer;