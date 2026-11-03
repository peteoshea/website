import React from 'react';
import Metadata from 'components/common/metadata';
import { render } from '../../testUtils';

vi.mock('next/head', () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>
}));

describe('Metadata', () => {
  test('title is the page title followed by the site name', () => {
    render(<Metadata pageTitle="About" />);
    expect(document.querySelector('title').textContent).toBe("About | Pete O'Shea");
  });

  test('title is only the site name when no page title is given', () => {
    render(<Metadata />);
    expect(document.querySelector('title').textContent).toBe("Pete O'Shea");
  });
});
