import React from 'react';
import { render } from '../../testUtils';

import CvSection from 'components/cv/section';

describe('CvSection', () => {
  const title = 'Section Title';

  test('contains title', () => {
    const { getByText } = render(<CvSection title={title} />);
    const element = getByText(title);
    expect(element).toBeDefined();
  });

  test('contains heading', () => {
    const { container } = render(<CvSection title={title} />);
    const element = container.querySelector('h2');
    expect(element).not.toBeNull();
  });

  test('heading contains title', () => {
    const { container } = render(<CvSection title={title} />);
    const element = container.querySelector('h2');
    expect(element.innerHTML).toBe(title);
  });

  test('contains children', () => {
    const { container } = render(
      <CvSection title={title}>
        <p>Child Text</p>
      </CvSection>
    );
    expect(container.innerHTML).toContain('<p>Child Text</p>');
  });
});
