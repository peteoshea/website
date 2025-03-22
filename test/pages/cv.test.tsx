import React from 'react';
import CV from '../../pages/cv';
import { render } from '../testUtils';

describe('CV page', () => {
  test('contains heading', () => {
    const { getByText } = render(<CV />);
    const element = getByText(/Curriculum Vitae/i);
    expect(element).toBeDefined();
  });

  test('contains personal statement', () => {
    const { getByText } = render(<CV />);
    const element = getByText(/Personal Statement/i);
    expect(element).toBeDefined();
  });

  test('contains core skills', () => {
    const { getByText } = render(<CV />);
    const element = getByText(/Core Skills/i);
    expect(element).toBeDefined();
  });

  test('contains portfolio', () => {
    const { getByText } = render(<CV />);
    const element = getByText(/Portfolio/i);
    expect(element).toBeDefined();
  });

  test('contains employment history', () => {
    const { getByText } = render(<CV />);
    const element = getByText(/Employment History/i);
    expect(element).toBeDefined();
  });

  test('contains education', () => {
    const { getByText } = render(<CV />);
    const element = getByText(/Education/i);
    expect(element).toBeDefined();
  });
});
