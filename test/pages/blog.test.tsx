import React from 'react';
import Blog from '../../pages/blog';
import { render } from '../testUtils';

describe('Blog posts page', () => {
  test('contains heading', () => {
    const { container } = render(<Blog />);
    const element = container.querySelector('h1');
    expect(element.innerHTML).toBe('Blog Posts');
  });
});
