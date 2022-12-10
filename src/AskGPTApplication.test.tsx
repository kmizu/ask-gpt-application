import React from 'react';
import { render, screen } from '@testing-library/react';
import AskGPTApplication from './AskGPTApplication';

test('renders learn react link', () => {
  render(<AskGPTApplication />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
