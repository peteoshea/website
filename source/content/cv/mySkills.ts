import Skills from 'types/skills';

export const ai =
  'Regular use of AI coding agents, including Claude Code and Hermes Agent, within a test-driven workflow.';
export const agile =
  'Agile development techniques, specifically Scrum, including some time as Scrum Master.';
export const apis = 'Experience designing, implementing and using RESTful and GraphQL APIs.';
export const ci =
  'CI/CD with GitHub Actions and Bash scripting, using Git on GitHub, Bitbucket and GitLab.';
export const devops =
  'DevOps and IaC on AWS using Terraform and Ansible, plus Linux administration (Red Hat and Debian).';
export const docker =
  'Using Docker and dev containers to ensure consistency across different environments.';
export const fullstack =
  'Full stack developer with extensive Delphi and PHP experience, plus C, C#, Objective-C, Python & Rust.';
export const javascript =
  'JavaScript/TypeScript using Node.js, React & Next.js with brief exposure to Svelte & Vue.js.';
export const sql = 'Strong SQL and relational database design, mainly with MySQL.';
export const tdd =
  'A love of Test-Driven Development, which encourages high code quality and maintainability.';

const mySkills: Skills = {
  bulletPoints: [fullstack, javascript, tdd, ai, devops, ci, docker, agile, apis, sql],
  title: 'Core Skills'
};

export default mySkills;
