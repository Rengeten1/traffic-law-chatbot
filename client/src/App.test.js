import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Traffic Law Chatbot heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Traffic Law Chatbot/i);
  expect(headingElement).toBeInTheDocument();
});

