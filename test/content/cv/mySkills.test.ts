import { describe, expect, test } from 'vitest';

import mySkills, {
  agile,
  ci,
  delphi,
  desktop,
  devops,
  git,
  javascript,
  php,
  python,
  scripting,
  sql,
  sysadmin,
  tdd,
  vagrant
} from '@/source/content/cv/mySkills';

describe('mySkills', () => {
  test('agile description is set', () => {
    expect(agile.description).toBe(
      'Agile development techniques, specifically Scrum, including some time as Scrum Master.'
    );
  });

  test('contains agile', () => {
    expect(mySkills).toContainEqual(agile);
  });

  test('ci description is set', () => {
    expect(ci.description).toBe(
      'CI (Continuous Integration) using GitHub Actions, Jenkins, Travis and CircleCI.'
    );
  });

  test('contains ci', () => {
    expect(mySkills).toContainEqual(ci);
  });

  test('delphi description is set', () => {
    expect(delphi.description).toBe(
      'Very experienced with Delphi, used as my main development environment for many years.'
    );
  });

  test('contains delphi', () => {
    expect(mySkills).toContainEqual(delphi);
  });

  test('desktop description is set', () => {
    expect(desktop.description).toBe(
      'Current desktop OS of choice is Windows 11 but spent some time with MacOS.'
    );
  });

  test('contains desktop', () => {
    expect(mySkills).toContainEqual(desktop);
  });

  test('devops description is set', () => {
    expect(devops.description).toBe(
      'DevOps experience setting up and maintaining various AWS resources with Terraform and Ansible.'
    );
  });

  test('contains devops', () => {
    expect(mySkills).toContainEqual(devops);
  });

  test('git description is set', () => {
    expect(git.description).toBe(
      'Good working knowledge of Git using GitHub, BitBucket and GitLab.'
    );
  });

  test('contains git', () => {
    expect(mySkills).toContainEqual(git);
  });

  test('javascript description is set', () => {
    expect(javascript.description).toBe(
      'Javascript mainly using Node.js, React & Next.js with some brief exposure to Svelte & Vue.js.'
    );
  });

  test('contains javascript', () => {
    expect(mySkills).toContainEqual(javascript);
  });

  test('php description is set', () => {
    expect(php.description).toBe(
      'Full stack development using PHP including RESTful API design, implementation and use.'
    );
  });

  test('contains php', () => {
    expect(mySkills).toContainEqual(php);
  });

  test('python description is set', () => {
    expect(python.description).toBe(
      'Use of Python to construct complex Fabric deployment scripts.'
    );
  });

  test('contains python', () => {
    expect(mySkills).toContainEqual(python);
  });

  test('scripting description is set', () => {
    expect(scripting.description).toBe(
      'Automation using scripting languages like bash and PowerShell.'
    );
  });

  test('contains scripting', () => {
    expect(mySkills).toContainEqual(scripting);
  });

  test('sql description is set', () => {
    expect(sql.description).toBe(
      'Lots of practise writing SQL and designing MySQL and Firebird databases.'
    );
  });

  test('contains sql', () => {
    expect(mySkills).toContainEqual(sql);
  });

  test('sysadmin description is set', () => {
    expect(sysadmin.description).toBe(
      'System administration skills with Linux (mainly Red Hat/Debian based systems).'
    );
  });

  test('contains sysadmin', () => {
    expect(mySkills).toContainEqual(sysadmin);
  });

  test('tdd description is set', () => {
    expect(tdd.description).toBe(
      'A love of TDD (Test Driven Development) which I feel has really improved my code quality.'
    );
  });

  test('contains tdd', () => {
    expect(mySkills).toContainEqual(tdd);
  });

  test('vagrant description is set', () => {
    expect(vagrant.description).toBe(
      'Virtualisation of development environments using Vagrant. (Looking to make more use of Docker)'
    );
  });

  test('contains vagrant', () => {
    expect(mySkills).toContainEqual(vagrant);
  });
});
