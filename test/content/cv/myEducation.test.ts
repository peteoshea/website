import myEducation, { alevels, degree, gcses, scrumMaster } from 'content/cv/myEducation';

describe('myEducation', () => {
  test('GCSEs date is 1990', () => {
    expect(gcses.date).toBe('1990');
  });

  test('GCSEs description is set', () => {
    expect(gcses.description).toBe(
      'Maths (A), Physics (A), Chemistry (A), ' +
        'Additional Maths (B), French (B), Biology (B), ' +
        'English Language (C), English Literature (C), Business Studies (C)'
    );
  });

  test('GCSEs location is Taunton', () => {
    expect(gcses.location).toBe('Taunton');
  });

  test('GCSEs name is set', () => {
    expect(gcses.name).toBe('9 GCSEs');
  });

  test('GCSEs school is Taunton', () => {
    expect(gcses.school).toBe('Taunton School');
  });

  test('GCSEs url is not set', () => {
    expect(gcses.url).toBeUndefined();
  });

  test('contains gcses', () => {
    expect(myEducation).toContain(gcses);
  });

  test('A-levels date is 1992', () => {
    expect(alevels.date).toBe('1992');
  });

  test('A-levels description is set', () => {
    expect(alevels.description).toBe(
      'Maths (A), Further Maths (C), Physics (C), Business Studies (C)'
    );
  });

  test('A-levels location is Taunton', () => {
    expect(alevels.location).toBe('Taunton');
  });

  test('A-levels name is set', () => {
    expect(alevels.name).toBe('4 A-Levels');
  });

  test('A-levels school is Taunton', () => {
    expect(alevels.school).toBe('Taunton School');
  });

  test('A-levels url is not set', () => {
    expect(alevels.url).toBeUndefined();
  });

  test('contains alevels', () => {
    expect(myEducation).toContain(alevels);
  });

  test('contains gcses', () => {
    expect(myEducation).toContain(gcses);
  });

  test('Degree date is 1996', () => {
    expect(degree.date).toBe('1996');
  });

  test('Degree description is not set', () => {
    expect(degree.description).toBeUndefined();
  });

  test('Degree location is Bath', () => {
    expect(degree.location).toBe('Bath');
  });

  test('Degree name is set', () => {
    expect(degree.name).toBe('Mathematics & Computing BSc (Hons)');
  });

  test('Degree school is Bath Uni', () => {
    expect(degree.school).toBe('University of Bath');
  });

  test('Degree url is not set', () => {
    expect(degree.url).toBeUndefined();
  });

  test('contains degree', () => {
    expect(myEducation).toContain(degree);
  });

  test('Scrum master date is 2016', () => {
    expect(scrumMaster.date).toBe('2016');
  });

  test('Scrum master name is set', () => {
    expect(scrumMaster.name).toBe('Professional Scrum Master I (PSM I)');
  });

  test('Scrum master school is Scrum.org', () => {
    expect(scrumMaster.school).toBe('Scrum.org');
  });

  test('Scrum master location is London', () => {
    expect(scrumMaster.location).toBe('London');
  });

  test('Scrum master description is set', () => {
    expect(scrumMaster.description).toBe('Attended a 2-day course before taking the exam at home');
  });

  test('Scrum master url is set', () => {
    expect(scrumMaster.url).toBe(
      'https://www.credly.com/badges/999fd331-1153-45df-a9a7-27a9145d0488/public_url'
    );
  });

  test('contains scrumMaster', () => {
    expect(myEducation).toContain(scrumMaster);
  });
});
