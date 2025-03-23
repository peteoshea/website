import Skills from 'types/skills';

export const agile =
  'Agile development techniques, specifically Scrum, including some time as Scrum Master.';
export const apis = 'Experience designing, implementing and using RESTful and GraphQL APIs.';
export const ci =
  'Automation using scripting languages like bash, including CI/CD using GitHub Actions.';
export const delphi =
  'Very experienced with Delphi, used as my main development environment for many years.';
export const desktop = 'Current desktop OS of choice is Windows 11 but some experience with MacOS.';
export const devops =
  'DevOps/IaC experience, managing mainly AWS resources, with Terraform and Ansible.';
export const docker =
  'Using Docker and dev containers to ensure consistency across different environments.';
export const fullstack =
  'Full stack developer with experience of a variety of, mainly object oriented, languages.';
export const git = 'Good working knowledge of Git using GitHub, BitBucket and GitLab.';
export const javascript =
  'JavaScript/TypeScript using Node.js, React & Next.js with brief exposure to Svelte & Vue.js.';
export const languages =
  'Extensive use of Delphi and PHP but have also worked with C, C#, Objective C, Python & Rust.';
export const sql = 'Lots of practise writing SQL and designing MySQL and Firebird databases.';
export const sysadmin =
  'System administration skills with Linux (mainly Red Hat and Debian based systems).';
export const tdd =
  'A love of Test Driven Development, which drives high code quality and maintainability.';

const mySkills: Skills = {
  bulletPoints: [
    fullstack,
    tdd,
    javascript,
    languages,
    devops,
    sysadmin,
    ci,
    docker,
    agile,
    git,
    apis,
    desktop
  ],
  title: 'Core Skills'
};

export default mySkills;
