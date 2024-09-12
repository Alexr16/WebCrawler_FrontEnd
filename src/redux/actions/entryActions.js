import axios from 'axios';

const URL = 'http://127.0.0.1:3000/';

export const FETCH_ENTRIES_SUCCESS = 'FETCH_ENTRIES_SUCCESS';
export const FETCH_ENTRIES_FAILURE = 'FETCH_ENTRIES_FAILURE';
export const SCRAPE_SUCCESS = 'SCRAPE_SUCCESS';
export const SCRAPE_FAILURE = 'SCRAPE_FAILURE';

export const fetchEntries = (filter) => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/api/entries?filter=${filter}`);
    console.log(response);
    dispatch({ type: FETCH_ENTRIES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_ENTRIES_FAILURE, payload: error.message });
  }
};

export const scrapeData = () => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/api/scrape`);
    onsole.log(response.data);
    dispatch({ type: SCRAPE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: SCRAPE_FAILURE, payload: error.message });
  }
};