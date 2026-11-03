import React from 'react';
import About from '../../pages/about';
import { render } from '../testUtils';

describe('About page', () => {
  test('contains heading About', () => {
    const { getByRole } = render(<About />);
    const element = getByRole('heading', { level: 1, name: 'About' });
    expect(element).toBeDefined();
  });

  test('contains each section heading', () => {
    const { getByRole } = render(<About />);
    expect(getByRole('heading', { level: 2, name: 'Who am I?' })).toBeDefined();
    expect(getByRole('heading', { level: 2, name: 'What interests me?' })).toBeDefined();
    expect(
      getByRole('heading', { level: 2, name: 'What am I currently working on?' })
    ).toBeDefined();
  });
  test('each paragraph is its own element', () => {
    const { getByText } = render(<About />);
    const first = getByText(/My name is Pete O'Shea/);
    const second = getByText(/After my travels I returned home/);
    expect(first.tagName).toBe('P');
    expect(second.tagName).toBe('P');
    expect(first).not.toBe(second);
  });

  test('contains the last paragraph of the page', () => {
    const { getByText } = render(<About />);
    expect(getByText(/focused on exploring the latest AI technologies/)).toBeDefined();
  });

  test('navbar About link points at the current page', () => {
    const { container } = render(<About />);
    const link = Array.from(container.querySelectorAll('nav a')).find(
      (a) => a.textContent === 'About'
    );
    expect(link.getAttribute('href')).toBe('#');
  });
});
