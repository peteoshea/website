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
      'Software engineer with over 25 years of experience across a range of languages and development environments, working from junior programmer up to lead developer and mentoring others along the way. Equally comfortable in a team or taking a solo project from concept to completion. Believes in clean, simple code, ideally test driven, and is always keen to learn new skills, most recently using AI coding agents to work faster without lowering quality.'
    );
  });

  test('title is set', () => {
    expect(myProfile.title).toBe('Personal Statement');
  });

  test('twitter handle is not set', () => {
    expect(myProfile.twitter).not.toBeDefined();
  });
});
