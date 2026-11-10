import Skills from 'types/skills';

export const ai =
  'Regular use of AI coding agents, including Claude Code and Hermes Agent, within a test-driven workflow.';
export const agile =
  'Agile development techniques, specifically Scrum, including some time as Scrum Master.';
export const apis = 'Experience designing, implementing and using RESTful and GraphQL APIs.';
export const ci =
  'Automation using scripting languages like Bash, including CI/CD using GitHub Actions.';
export const delphi =
  'Very experienced with Delphi, used as my main development environment for many years.';
export const devops =
  'DevOps and IaC experience, mainly managing AWS resources with Terraform and Ansible.';
export const docker =
  'Using Docker and dev containers to ensure consistency across different environments.';
export const fullstack =
  'Full stack developer with experience across a variety of languages, mainly object oriented.';
export const git = 'Experienced with Git, using GitHub, BitBucket and GitLab.';
export const javascript =
  'JavaScript/TypeScript using Node.js, React & Next.js with brief exposure to Svelte & Vue.js.';
export const languages =
  'Extensive use of Delphi and PHP, plus experience with C, C#, Objective C, Python & Rust.';
export const sql = 'Lots of practice writing SQL and designing MySQL and Firebird databases.';
export const sysadmin =
  'System administration skills with Linux (mainly Red Hat and Debian based systems).';
export const tdd =
  'A love of Test Driven Development, which encourages high code quality and maintainability.';

const mySkills: Skills = {
  bulletPoints: [
    fullstack,
    tdd,
    ai,
    javascript,
    languages,
    devops,
    sysadmin,
    ci,
    docker,
    agile,
    git,
    sql,
    apis
  ],
  title: 'Core Skills'
};

export default mySkills;
