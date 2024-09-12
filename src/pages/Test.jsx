
import './EntryList.css'; // Importing the CSS file

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/reducers/filterReducer';
import { fetchEntries } from '../redux/actions/entryActions';
import Dropdown from '../components/Dropdown';

const FILTER_OPTIONS = [
  { value: '', label: 'All' },
  { value: 'moreThanFiveWords', label: 'More than 5 Words' },
  { value: 'lessThanOrEqualToFiveWords', label: '5 Words or Less' },
];

const Test = () => {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.entries.entries);
  const filter = useSelector((state) => state.filter);
  const status = useSelector((state) => state.entries.status);
  const error = useSelector((state) => state.entries.error);

  useEffect(() => {
    dispatch(fetchEntries(filter));
  }, [dispatch, filter]);

  return (
    <div>
      <h1>Hacker News Entries</h1>
      <Dropdown
        options={FILTER_OPTIONS}
        value={filter}
        onChange={(value) => dispatch(setFilter(value))}
      />
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'failed' ? (
        <p>Error: {error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Points</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.id}</td>
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

export default Test;