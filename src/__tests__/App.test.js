import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Table from '../components/Table';
import Navbar from '../components/Navbar';

describe('Test App', () => {
  it('renders the title and dropdown', () => {
    render(
      <Provider store={store}>
        <Navbar />
        <Table />
      </Provider>
    );
    expect(screen.getByText('Web Scraper')).toBeInTheDocument();
    expect(screen.getByText('Filter:')).toBeInTheDocument();
  });

  it('calls scrape & reload on button click', () => {
    render(
      <Provider store={store}>
        <Navbar />
        <Table />
      </Provider>
    );
    const button = screen.getByText('Scrape Data and Reload');
    fireEvent.click(button);
    expect(screen.getByText('#')).toBeInTheDocument(); 
  });
});