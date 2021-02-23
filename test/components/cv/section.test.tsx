import React from 'react';
import CvSection from '../../../source/components/cv/section';
import { render } from '../../testUtils';

describe('CvSection', () => {
  test('contains heading', () => {
    const { getByText } = render(<CvSection title="Section Heading" />);
    const element = getByText(/Section Heading/i);
    expect(element).toBeDefined();
  });
});
