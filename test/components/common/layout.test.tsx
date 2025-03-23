import React from 'react';
import { describe, expect, test } from 'vitest';
import { render } from '../../testUtils';

import Layout from '@/source/components/common/layout';

describe('Page layout', () => {
  const subheading = 'subheading for page';
  const pageTitle = 'Page Title';

  test('contains nav tag', () => {
    const { container } = render(<Layout pageTitle={pageTitle} />);
    const element = container.querySelector('nav');
    expect(element).not.toBeNull();
  });

  test('contains footer tag', () => {
    const { container } = render(<Layout pageTitle={pageTitle} />);
    const element = container.querySelector('footer');
    expect(element).not.toBeNull();
  });

  test('contains main tag', () => {
    const { container } = render(<Layout pageTitle={pageTitle} />);
    const element = container.querySelector('main');
    expect(element).not.toBeNull();
  });

  test('main tag contains children', () => {
    const { container } = render(
      <Layout pageTitle={pageTitle}>
        <p>Child Text</p>
      </Layout>
    );
    const element = container.querySelector('main');
    expect(element.innerHTML).toBe('<p>Child Text</p>');
  });

  test('contains header tag', () => {
    const { container } = render(<Layout pageTitle={pageTitle} />);
    const element = container.querySelector('header');
    expect(element).not.toBeNull();
  });

  test('header contains h1 tag', () => {
    const { container } = render(<Layout pageTitle={pageTitle} />);
    const header = container.querySelector('header');
    const element = header.querySelector('h1');
    expect(element).not.toBeNull();
  });

  test('header h1 tag contains title by default', () => {
    const { container } = render(<Layout pageTitle={pageTitle} />);
    const element = container.querySelector('header').querySelector('h1');
    expect(element.innerHTML).toBe(pageTitle);
  });

  test('header h1 tag contains heading when set', () => {
    const heading = 'Option Page Heading';
    const { container } = render(<Layout pageTitle={pageTitle} heading={heading} />);
    const element = container.querySelector('header').querySelector('h1');
    expect(element.innerHTML).toBe(heading);
  });

  test('header does not contain h2 tag by default', () => {
    const { container } = render(<Layout pageTitle={pageTitle} />);
    const header = container.querySelector('header');
    const element = header.querySelector('h2');
    expect(element).toBeNull();
  });

  test('header contains h2 tag when subheading set', () => {
    const { container } = render(<Layout pageTitle={pageTitle} subheading={subheading} />);
    const header = container.querySelector('header');
    const element = header.querySelector('h2');
    expect(element).not.toBeNull();
  });

  test('header h2 tag contains subheading when set', () => {
    const { container } = render(<Layout pageTitle={pageTitle} subheading={subheading} />);
    const element = container.querySelector('header').querySelector('h2');
    expect(element.innerHTML).toBe(subheading);
  });
});
