import React from 'react';
import { render } from '../testUtils';
import { Home } from '../../pages/index';

describe('Home page', () => {
  test('contains heading', () => {
    const { getByText } = render(<Home />);
    const element = getByText(/Welcome to the website/i);
    expect(element).toBeDefined();
  });

  test('contains link to cv', () => {
    const { getByText } = render(<Home />);
    const element = getByText(/CV/i);
    expect(element).toBeDefined();
  });

  test('contains license', () => {
    const { getByText } = render(<Home />);
    const element = getByText(/Creative Commons Attribution 4.0 International License/i);
    expect(element).toBeDefined();
  });

  test('hero image loads eagerly because it is the LCP element', () => {
    const { container } = render(<Home />);
    const element = container.querySelector('img[src*="Writing-Tools"]');
    expect(element.getAttribute('loading')).toBe('eager');
  });
});
