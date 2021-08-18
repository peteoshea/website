import React from 'react';
import Navbar from '../../source/components/navbar';
import { render } from '../testUtils';

describe('Navbar', () => {
  test('contains nav tag', () => {
    const { container } = render(<Navbar />);
    const element = container.querySelector('nav');
    expect(element).not.toBeNull();
  });

  test('contains img', () => {
    const { container } = render(<Navbar />);
    const element = container.querySelector('img');
    expect(element).not.toBeNull();
  });

  test('contains img with logo', () => {
    const { container } = render(<Navbar />);
    const element = container.querySelector('img');
    expect(element.getAttribute('src')).toBe('/favicon-96x96.png');
  });

  test('contains link to home', () => {
    const { container } = render(<Navbar />);
    const links = container.querySelectorAll('a');
    const element = Array.from(links).find((element) => element.getAttribute('href') === '/');
    expect(element).toBeDefined();
  });

  test('contains cv', () => {
    const { getByText } = render(<Navbar />);
    const element = getByText(/CV/i);
    expect(element).toBeDefined();
  });

  test('contains cv link', () => {
    const { getByText } = render(<Navbar />);
    const element = getByText(/CV/i);
    expect(element.getAttribute('href')).toBe('/cv');
  });

  test('contains blog', () => {
    const { getByText } = render(<Navbar />);
    const element = getByText(/Blog/i);
    expect(element).toBeDefined();
  });

  test('contains blog link', () => {
    const { getByText } = render(<Navbar />);
    const element = getByText(/Blog/i);
    expect(element.getAttribute('href')).toBe('/blog');
  });
});
