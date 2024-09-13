import './Table.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/reducers/filterReducer';
import { fetchEntries, scrapeData } from '../redux/actions/entryActions';
import Dropdown from './Dropdown';

const FILTER_OPTIONS = [
  { value: '', label: 'All' },
  { value: 'moreThanFiveWords', label: 'More than 5 Words' },
  { value: 'lessThanOrEqualToFiveWords', label: '5 Words or Less' },
];

const Table= () => {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.entries.entries);
  const filter = useSelector((state) => state.filter);
  const status = useSelector((state) => state.entries.status);
  const error = useSelector((state) => state.entries.error);
  const scrapeMessage = useSelector((state) => state.entries.scrapeMessage);

  useEffect(() => {
    dispatch(fetchEntries(filter));
  }, [dispatch, filter]);

  // Function to handle scraping and fetching new data
  const handleScrapeAndReload = async () => {
    await dispatch(scrapeData());
    dispatch(fetchEntries(filter));  // Reload entries after scraping
  };

  return (
    <div className="container">
        <div className="filter-container">
         <div className="dropdown-container">
          <label htmlFor="filter">Filter: </label>
          <Dropdown
          options={FILTER_OPTIONS}
          value={filter}
          onChange={(value) => dispatch(setFilter(value))}
        />
          </div> 
        <button className="button" onClick={handleScrapeAndReload}>Scrape Data and Reload</button>
      </div>
      {scrapeMessage && <p>{scrapeMessage}</p>}
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'failed' ? (
        <p>Error: {error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Points</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={entry.id}>
                <td>{index + 1}</td>
                <td>{entry.title}</td>
                <td>{entry.points}</td>
                <td>{entry.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;