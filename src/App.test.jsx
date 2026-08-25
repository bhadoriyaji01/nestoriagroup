import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the Header component', () => {
    render(<App />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });
});
