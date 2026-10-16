// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GlenViolet title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GlenViolet/i);
    expect(titleElement).toBeInTheDocument();
});
