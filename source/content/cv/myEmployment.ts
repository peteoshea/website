import Job from 'types/job';

export const brithene: Job = {
  startDate: '1997',
  endDate: '1998',
  title: 'Analyst Programmer',
  employer: 'Brithene Films',
  location: 'Bridgwater',
  description:
    'Database programmer for a manufacturing company. Developing mainly with UniVerse BASIC, but some contact with Visual Basic. The work comprised of controlling the entry, storage and analysis of data relating to production, sales and accounts along with maintaining a mainframe system.'
};
export const fbh: Job = {
  startDate: '2000',
  endDate: '2010',
  title: 'Consultant',
  employer: 'FBH Associates',
  location: 'Taunton',
  description:
    'Started off working on UniVerse, and later jBASE, systems for the first few years. This included system administration of Unix, and later various Linux, systems.\n\n' +
    'Cross trained to Delphi, outside office hours, creating a small Windows application which was used internally for many years. Soon became an integral part of the Delphi team working on the main POS products. Role included:\n' +
    '- Delphi development as part of a small team.\n' +
    '- Source control using CVS and later Subversion.\n' +
    '- Craft SQL to access the Firebird databases used to store the POS data.\n' +
    '- Design and create various reports for end users.\n' +
    '- Liaising with clients and partners to define development requirements.\n' +
    '- Creating specification documents and time estimates.'
};
export const freelance: Job = {
  startDate: '2010',
  title: 'Freelance Software Engineer',
  employer: 'Self Employed',
  location: 'Remote',
  description:
    'Started a small business. Very varied work including:\n' +
    '- Creation of an iOS app to help find suitable ski accommodation.\n' +
    '- Bespoke Windows application for a waste management company.\n' +
    '- Web site design and setup of e-commerce sites, using Crystallize GraphQL API.\n' +
    '- Regular software development for previous employer.\n\n' +
    'This was the sole source of income for two years but was scaled back after returning to full-time employment. Now just occasional tinkering on personal projects.'
};
export const ibm: Job = {
  startDate: '1999',
  endDate: '1999',
  title: 'C/C++ Programmer',
  employer: 'IBM Global Services Australia',
  location: 'Sydney',
  description:
    '3 month contract during a year out travelling the world. Working as part of a team to check code for any Y2K issues and fix, as appropriate. This expanded to checking a variety of different languages including Visual Basic, Java and Unix shell scripts along with C and C++. Some simple Java programming helped locate tokens and automate fixes.'
};
export const icl: Job = {
  startDate: '1994',
  endDate: '1995',
  title: 'Industrial Trainee',
  employer: 'ICL (now part of Fujitsu)',
  location: 'Bracknell',
  description:
    'Placement year while studying at university. Role included the following:\n' +
    '- Programming in C under various Unix based systems.\n' +
    '- Writing shell scripts.\n' +
    '- Building, installing and testing new products on various machines.\n' +
    '- Preparation and execution of presentations for new products.'
};
export const polarisLeadDeveloper: Job = {
  startDate: '2013',
  endDate: '2017',
  title: 'Lead Developer',
  employer: 'Polaris Elements',
  location: 'Taunton',
  description:
    'Quickly promoted to Lead Developer, managing a team of 5 developers working on multiple projects including Windows applications and services based around POS systems, written in Delphi, and various web applications. Tasks included:\n' +
    '- Actively developing on all of the Delphi and PHP projects.\n' +
    '- Allocation of work to ensure the various projects stayed on track.\n' +
    '- Mentoring developers to help improve the quality of code produced.\n' +
    '- Unit testing, including getting a lot of legacy code under test.'
};
export const polarisLeadDeveloperScrum: Job = {
  startDate: '2017',
  title: 'Lead Developer',
  employer: 'Polaris Elements',
  location: 'Remote',
  description:
    'After company restructuring became a software engineer in multiple Scrum teams, keeping the title as leading by example and mentoring were still an essential part of the role. Tasks include:\n' +
    '- Coding in various languages, including JavaScript and TypeScript, with a focus on TDD.\n' +
    '- Consistent provisioning with automation where possible, using Terraform and Ansible.\n' +
    '- Managing containers, including migrating certain projects to use dev containers.\n' +
    '- Documentation and automation using various scripting languages.'
};
export const polarisSeniorDeveloper: Job = {
  startDate: '2012',
  endDate: '2013',
  title: 'Senior Developer',
  employer: 'Polaris Elements',
  location: 'Taunton',
  description:
    'Re-joined previous employer after change of ownership and rebranding. Tasks included:\n' +
    '- Solo project to design and build online loyalty system with a RESTful web service API.\n' +
    '- Written in PHP using CodeIgniter, a Bootstrap based front-end with a MySQL database.\n' +
    '- Migrated source code from Subversion to Git which greatly improved flexibility.\n' +
    '- Setting up and maintaining various Linux VMs running on Citrix XenServer hosted on multiple dedicated physical on-prem servers.'
};

const myEmployment: Job[] = [
  polarisLeadDeveloperScrum,
  polarisLeadDeveloper,
  polarisSeniorDeveloper,
  freelance,
  fbh,
  ibm,
  brithene,
  icl
];

export default myEmployment;
