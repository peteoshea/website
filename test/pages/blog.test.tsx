import React from 'react';
import { describe, expect, test } from 'vitest';
import { render } from '../testUtils';

import Blog from '../../pages/blog';

describe('Blog posts page', () => {
  test('contains heading', () => {
    const { container } = render(<Blog />);
    const element = container.querySelector('h1');
    expect(element?.innerHTML).toBe('Blog Posts');
  });
});
