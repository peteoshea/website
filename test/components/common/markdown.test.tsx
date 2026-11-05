import fs from 'node:fs';
import path from 'node:path';
import Markdown from 'components/common/markdown';
import React from 'react';
import { render } from '../../testUtils';

// jsdom does not apply the stylesheet, so read it to check each element has a rule.
const stylesheet = fs.readFileSync(
  path.resolve('source/components/common/markdown.module.css'),
  'utf8'
);

describe('Markdown styles', () => {
  test.each(['h2', 'h3', 'h4', 'p', 'a', 'blockquote', 'code', 'pre'])(
    'restyles %s, which the Tailwind reset leaves looking like body text',
    (element) => {
      expect(stylesheet).toMatch(new RegExp(`\\.markdown ${element}\\s*\\{`));
    }
  );
});

describe('Markdown', () => {
  test('contains a div', () => {
    const { container } = render(<Markdown content="" />);
    const element = container.querySelector('div');
    expect(element).toBeDefined();
  });

  test('div has class of markdown', () => {
    const { container } = render(<Markdown content="" />);
    const element = container.querySelector('div');
    const cssClass = element.getAttribute('class');
    expect(cssClass).toContain('markdown');
  });

  test('contains content', () => {
    const content = 'Some example content';
    const { container } = render(<Markdown content={content} />);
    expect(container.innerHTML).toContain(content);
  });

  test('wraps plain text in a paragraph', () => {
    const content = 'Some example content';
    const { container } = render(<Markdown content={content} />);
    expect(container.innerHTML).toContain('<p>' + content + '</p>');
  });

  test('converts asterisk surrounded text to em', () => {
    const content = 'Some *example* content';
    const { container } = render(<Markdown content={content} />);
    expect(container.innerHTML).toContain('Some <em>example</em> content');
  });

  test('converts underscore surrounded text to em', () => {
    const content = 'Some _example_ content';
    const { container } = render(<Markdown content={content} />);
    expect(container.innerHTML).toContain('Some <em>example</em> content');
  });

  test('converts double asterisk surrounded text to strong', () => {
    const content = 'Some **example** content';
    const { container } = render(<Markdown content={content} />);
    expect(container.innerHTML).toContain('Some <strong>example</strong> content');
  });

  test('converts dashed list to unordered list', () => {
    const content = '- First\n- Second\n- Third';
    const { container } = render(<Markdown content={content} />);
    const element = container.querySelector('ul');
    expect(element).toBeDefined();
  });
});
