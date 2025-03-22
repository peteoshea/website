import mySkills, {
  agile,
  apis,
  ci,
  delphi,
  desktop,
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

      test('desktop', () => {
        expect(mySkills.bulletPoints).toContainEqual(desktop);
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
          'Automation using scripting languages like bash, including CI/CD using GitHub Actions.'
        );
      });

      test('delphi', () => {
        expect(delphi).toBe(
          'Very experienced with Delphi, used as my main development environment for many years.'
        );
      });

      test('desktop', () => {
        expect(desktop).toBe(
          'Current desktop OS of choice is Windows 11 but some experience with MacOS.'
        );
      });

      test('devops', () => {
        expect(devops).toBe(
          'DevOps/IaC experience, managing mainly AWS resources, with Terraform and Ansible.'
        );
      });

      test('docker', () => {
        expect(docker).toBe(
          'Using Docker and dev containers to ensure consistency across different environments.'
        );
      });

      test('fullstack', () => {
        expect(fullstack).toBe(
          'Full stack developer with experience of a variety of, mainly object oriented, languages.'
        );
      });

      test('git', () => {
        expect(git).toBe('Good working knowledge of Git using GitHub, BitBucket and GitLab.');
      });

      test('javascript', () => {
        expect(javascript).toBe(
          'JavaScript/TypeScript using Node.js, React & Next.js with brief exposure to Svelte & Vue.js.'
        );
      });

      test('languages', () => {
        expect(languages).toBe(
          'Extensive use of Delphi and PHP but have also worked with C, C#, Objective C, Python & Rust.'
        );
      });

      test('sql', () => {
        expect(sql).toBe(
          'Lots of practise writing SQL and designing MySQL and Firebird databases.'
        );
      });

      test('sysadmin', () => {
        expect(sysadmin).toBe(
          'System administration skills with Linux (mainly Red Hat and Debian based systems).'
        );
      });

      test('tdd', () => {
        expect(tdd).toBe(
          'A love of Test Driven Development, which drives high code quality and maintainability.'
        );
      });
    });
  });

  test('title is set', () => {
    expect(mySkills.title).toBe('Core Skills');
  });
});
