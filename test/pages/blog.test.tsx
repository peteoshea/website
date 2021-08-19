import React from 'react';
import Blog from '../../pages/blog';
import { render } from '../testUtils';

describe('Blog posts page', () => {
  test('contains heading', () => {
    const { getByText } = render(<Blog />);
    const element = getByText(/Blog Posts/i);
    expect(element).toBeDefined();
  });
});
