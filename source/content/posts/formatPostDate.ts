// '2026-11-04' → '4 November 2026'. Parsed as UTC so the day never shifts with the build machine's zone.
const formatPostDate = (date: string): string =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
  });

export default formatPostDate;
