import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('fake test', () => {
  expect(2).toBe(2);
});

test('fake test', () => {
  expect(3).toBe(3);
});
