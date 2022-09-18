import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title text', () => {
  render(<a rel="noreferrer"pp />);
  const titleElement = screen.getByText(/KERALA LOTTERY RESULT/i);
  expect(titleElement).toBeInTheDocument();
});
