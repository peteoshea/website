import React from 'react';
import Layout from 'components/common/layout';
import { render } from '../../testUtils';

describe('Page layout', () => {
  test('contains nav tag', () => {
    const { container } = render(<Layout />);
    const element = container.querySelector('nav');
    expect(element).not.toBeNull();
  });
});
