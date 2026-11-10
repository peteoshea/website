import mySkills, {
  agile,
  apis,
  ci,
  devops,
  docker,
  fullstack,
  javascript,
  sql,
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

      test('javascript', () => {
        expect(mySkills.bulletPoints).toContainEqual(javascript);
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
          'CI/CD with GitHub Actions and Bash scripting, using Git on GitHub, Bitbucket and GitLab.'
        );
      });

      test('devops', () => {
        expect(devops).toBe(
          'DevOps and IaC on AWS using Terraform and Ansible, plus Linux administration (Red Hat and Debian).'
        );
      });

      test('docker', () => {
        expect(docker).toBe(
          'Using Docker and dev containers to ensure consistency across different environments.'
        );
      });

      test('fullstack', () => {
        expect(fullstack).toBe(
          'Full stack developer with extensive Delphi and PHP experience, plus C, C#, Objective-C, Python & Rust.'
        );
      });

      test('javascript', () => {
        expect(javascript).toBe(
          'JavaScript/TypeScript using Node.js, React & Next.js with brief exposure to Svelte & Vue.js.'
        );
      });

      test('sql', () => {
        expect(sql).toBe('Strong SQL and relational database design, mainly with MySQL.');
      });

      test('tdd', () => {
        expect(tdd).toBe(
          'A love of Test-Driven Development, which encourages high code quality and maintainability.'
        );
      });
    });
  });

  test('title is set', () => {
    expect(mySkills.title).toBe('Core Skills');
  });
});
