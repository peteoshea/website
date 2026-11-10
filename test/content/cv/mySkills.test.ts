import mySkills, {
  agile,
  apis,
  ci,
  delphi,
  devops,
  docker,
  fullstack,
  git,
  javascript,
  languages,
  sql,
  sysadmin,
  tdd
} from 'content/cv/mySkills';

describe('mySkills', () => {
  describe('bulletPoints', () => {
    describe('contains', () => {
      test('agile', () => {
        expect(mySkills.bulletPoints).toContainEqual(agile);
      });

      test('apis', () => {
        expect(mySkills.bulletPoints).toContainEqual(apis);
      });

      test('ci', () => {
        expect(mySkills.bulletPoints).toContainEqual(ci);
      });

      test('devops', () => {
        expect(mySkills.bulletPoints).toContainEqual(devops);
      });

      test('docker', () => {
        expect(mySkills.bulletPoints).toContainEqual(docker);
      });

      test('fullstack', () => {
        expect(mySkills.bulletPoints).toContainEqual(fullstack);
      });

      test('git', () => {
        expect(mySkills.bulletPoints).toContainEqual(git);
      });

      test('javascript', () => {
        expect(mySkills.bulletPoints).toContainEqual(javascript);
      });

      test('languages', () => {
        expect(mySkills.bulletPoints).toContainEqual(languages);
      });

      test('sysadmin', () => {
        expect(mySkills.bulletPoints).toContainEqual(sysadmin);
      });

      test('tdd', () => {
        expect(mySkills.bulletPoints).toContainEqual(tdd);
      });
    });

    describe('check content', () => {
      test('agile', () => {
        expect(agile).toBe(
          'Agile development techniques, specifically Scrum, including some time as Scrum Master.'
        );
      });

      test('apis', () => {
        expect(apis).toBe('Experience designing, implementing and using RESTful and GraphQL APIs.');
      });

      test('ci', () => {
        expect(ci).toBe(
          'Automation using scripting languages like Bash, including CI/CD using GitHub Actions.'
        );
      });

      test('delphi', () => {
        expect(delphi).toBe(
          'Very experienced with Delphi, used as my main development environment for many years.'
        );
      });

      test('devops', () => {
        expect(devops).toBe(
          'DevOps and IaC experience, mainly managing AWS resources with Terraform and Ansible.'
        );
      });

      test('docker', () => {
        expect(docker).toBe(
          'Using Docker and dev containers to ensure consistency across different environments.'
        );
      });

      test('fullstack', () => {
        expect(fullstack).toBe(
          'Full stack developer with experience across a variety of languages, mainly object oriented.'
        );
      });

      test('git', () => {
        expect(git).toBe('Experienced with Git, using GitHub, BitBucket and GitLab.');
      });

      test('javascript', () => {
        expect(javascript).toBe(
          'JavaScript/TypeScript using Node.js, React & Next.js with brief exposure to Svelte & Vue.js.'
        );
      });

      test('languages', () => {
        expect(languages).toBe(
          'Extensive use of Delphi and PHP, plus experience with C, C#, Objective C, Python & Rust.'
        );
      });

      test('sql', () => {
        expect(sql).toBe(
          'Lots of practice writing SQL and designing MySQL and Firebird databases.'
        );
      });

      test('sysadmin', () => {
        expect(sysadmin).toBe(
          'System administration skills with Linux (mainly Red Hat and Debian based systems).'
        );
      });

      test('tdd', () => {
        expect(tdd).toBe(
          'A love of Test Driven Development, which encourages high code quality and maintainability.'
        );
      });
    });
  });

  test('title is set', () => {
    expect(mySkills.title).toBe('Core Skills');
  });
});
