import myProfile from 'content/cv/myProfile';

describe('myProfile', () => {
  test('email is set to mail@peteoshea.co.uk', () => {
    expect(myProfile.email).toBe('mail@peteoshea.co.uk');
  });

  test('github username is set to peteoshea', () => {
    expect(myProfile.githubName).toBe('peteoshea');
  });

  test('github url is set', () => {
    expect(myProfile.githubUrl).toBe('https://github.com/peteoshea');
  });

  test('linkedIn username is set', () => {
    expect(myProfile.linkedInName).toBe("Pete O'Shea");
  });

  test('linkedIn url is set', () => {
    expect(myProfile.linkedInUrl).toBe('https://www.linkedin.com/in/pete-o-shea-9a072126/');
  });

  test('summary is set', () => {
    expect(myProfile.summary).toBe(
      'Highly motivated software engineer with over 25 years of experience using various languages and development environments. Works well as part of a team, with experience as junior programmer all the way up to lead developer, mentoring junior programmers, and peers. Also comfortable working on solo projects from concept all the way through to completion. Strong belief in clean, simple code, ideally test driven, and always keen to learn new skills, which is the most important part of being a developer.'
    );
  });

  test('title is set', () => {
    expect(myProfile.title).toBe('Personal Statement');
  });

  test('twitter handle is not set', () => {
    expect(myProfile.twitter).not.toBeDefined();
  });
});
