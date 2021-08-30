import React from 'react';
import Layout from 'components/common/layout';
import { render } from '../../testUtils';

describe('Page layout', () => {
  test('contains nav tag', () => {
    const { container } = render(<Layout />);
    const element = container.querySelector('nav');
    expect(element).not.toBeNull();
  });

  test('contains footer tag', () => {
    const { container } = render(<Layout />);
    const element = container.querySelector('footer');
    expect(element).not.toBeNull();
  });

  test('contains main tag', () => {
    const { container } = render(<Layout />);
    const element = container.querySelector('main');
    expect(element).not.toBeNull();
  });

  test('main tag contains children', () => {
    const { container } = render(
      <Layout>
        <p>Child Text</p>
      </Layout>
    );
    const element = container.querySelector('main');
    expect(element.innerHTML).toBe('<p>Child Text</p>');
  });
});
