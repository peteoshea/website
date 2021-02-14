import React from 'react';
import { render } from '../testUtils';
import { CV } from '../../pages/cv';

describe('CV page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<CV />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
