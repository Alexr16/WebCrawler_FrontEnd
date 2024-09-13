import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

it('Check if Navbar renders correctly', () => {
  render(
    <Navbar />
  );
   expect(screen.getByText('Web Scraper')).toBeInTheDocument();
});

