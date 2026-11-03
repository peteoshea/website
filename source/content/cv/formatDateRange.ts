const formatDateRange = (startDate: string, endDate?: string): string =>
  startDate === endDate ? startDate : `${startDate}–${endDate || 'Present'}`;

export default formatDateRange;
