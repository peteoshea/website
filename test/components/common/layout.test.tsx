import React from 'react';
import Layout from 'components/common/layout';
import { render } from '../../testUtils';

describe('Page layout', () => {
  const subheading = 'subheading for page';
  const title = 'Page Title';

  test('contains nav tag', () => {
    const { container } = render(<Layout title={title} />);
    const element = container.querySelector('nav');
    expect(element).not.toBeNull();
  });

  test('contains footer tag', () => {
    const { container } = render(<Layout title={title} />);
    const element = container.querySelector('footer');
    expect(element).not.toBeNull();
  });

  test('contains main tag', () => {
    const { container } = render(<Layout title={title} />);
    const element = container.querySelector('main');
    expect(element).not.toBeNull();
  });

  test('main tag contains children', () => {
    const { container } = render(
      <Layout title={title}>
        <p>Child Text</p>
      </Layout>
    );
    const element = container.querySelector('main');
    expect(element.innerHTML).toBe('<p>Child Text</p>');
  });

  test('contains header tag', () => {
    const { container } = render(<Layout title={title} />);
    const element = container.querySelector('header');
    expect(element).not.toBeNull();
  });

  test('header contains h1 tag', () => {
    const { container } = render(<Layout title={title} />);
    const header = container.querySelector('header');
    const element = header.querySelector('h1');
    expect(element).not.toBeNull();
  });

  test('header h1 tag contains title', () => {
    const { container } = render(<Layout title={title} />);
    const element = container.querySelector('header').querySelector('h1');
    expect(element.innerHTML).toBe(title);
  });

  test('header h1 tag contains heading if set', () => {
    const heading = 'Option Page Heading';
    const { container } = render(<Layout title={title} heading={heading} />);
    const element = container.querySelector('header').querySelector('h1');
    expect(element.innerHTML).toBe(heading);
  });

  test('header does not contains h2 tag', () => {
    const { container } = render(<Layout title={title} />);
    const header = container.querySelector('header');
    const element = header.querySelector('h2');
    expect(element).toBeNull();
  });

  test('header contains h2 tag when subheading set', () => {
    const { container } = render(<Layout title={title} subheading={subheading} />);
    const header = container.querySelector('header');
    const element = header.querySelector('h2');
    expect(element).not.toBeNull();
  });

  test('header h1 tag contains title', () => {
    const { container } = render(<Layout title={title} subheading={subheading} />);
    const element = container.querySelector('header').querySelector('h2');
    expect(element.innerHTML).toBe(subheading);
  });
});
