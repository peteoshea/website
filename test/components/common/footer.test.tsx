import React from 'react';
import { describe, expect, test } from 'vitest';
import { render } from '../../testUtils';

import Footer from '../../../source/components/common/footer';

describe('Footer', () => {
  test('contains footer tag', () => {
    const { container } = render(<Footer />);
    const element = container.querySelector('footer');
    expect(element).not.toBeNull();
  });

  test('contains link to creative commons license', () => {
    const { container } = render(<Footer />);
    const links = container.querySelectorAll('a');
    const element = Array.from(links).find(
      (element) => element.getAttribute('href') === 'http://creativecommons.org/licenses/by/4.0/'
    );
    expect(element).toBeDefined();
  });
});
