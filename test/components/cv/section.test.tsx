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

  test('heading is a bolder, darker shade of the page heading red', () => {
    const { container } = render(<CvSection title={title} />);
    const heading = container.querySelector('h2').className;
    expect(heading).toMatch(/(^|\s)text-red-900(\s|$)/);
    expect(heading).toMatch(/(^|\s)font-semibold(\s|$)/);
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
