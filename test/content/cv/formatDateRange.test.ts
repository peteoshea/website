import formatDateRange from 'content/cv/formatDateRange';

describe('formatDateRange', () => {
  test('joins start and end date with an en dash', () => {
    expect(formatDateRange('2013', '2021')).toBe('2013–2021');
  });

  test('uses Present when there is no end date', () => {
    expect(formatDateRange('2013', undefined)).toBe('2013–Present');
  });

  test('shows a single date when start and end date are the same', () => {
    expect(formatDateRange('2013', '2013')).toBe('2013');
  });
});
