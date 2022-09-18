import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title text', () => {
  render(<App />);
  const titleElement = screen.getByText(/KERALA LOTTERY RESULT/i);
  expect(titleElement).toBeInTheDocument();
});
