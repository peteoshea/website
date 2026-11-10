import Job from 'types/job';

export const brithene: Job = {
  startDate: '1997',
  endDate: '1998',
  title: 'Analyst Programmer',
  employer: 'Brithene Films',
  location: 'Bridgwater',
  description:
    'Database programmer for a manufacturing company. Developing mainly with UniVerse BASIC, but some contact with Visual Basic. The work involved controlling the entry, storage and analysis of data relating to production, sales and accounts along with maintaining a mainframe system.'
};
export const fbh: Job = {
  startDate: '2000',
  endDate: '2010',
  title: 'Consultant',
  employer: 'FBH Associates',
  location: 'Taunton',
  description:
    'Started off working on UniVerse, and later jBASE, systems for the first few years. This included system administration of Unix, and later various Linux, systems.\n\n' +
    'Cross-trained to Delphi, outside office hours, creating a small Windows application which was used internally for many years. Soon became an integral part of the Delphi team working on the main POS products. Role included:\n' +
    '- Delphi development as part of a small team.\n' +
    '- Source control using CVS and later Subversion.\n' +
    '- Craft SQL to access the Firebird databases used to store the POS data.\n' +
    '- Design and create various reports for end users.\n' +
    '- Liaising with clients and partners to define development requirements.\n' +
    '- Creating specification documents and time estimates.'
};
export const freelance: Job = {
  startDate: '2010',
  endDate: '2018',
  title: 'Freelance Software Engineer',
  employer: 'Self Employed',
  location: 'Remote',
  description:
    'Started a small business. Very varied work including:\n' +
    '- Creation of an iOS app to help find suitable ski accommodation.\n' +
    '- Bespoke Windows application for a waste management company.\n' +
    '- Website design and setup of e-commerce sites, using the Crystallize GraphQL API.\n' +
    '- Regular software development for previous employer.\n\n' +
    'This was the sole source of income for two years but was scaled back after returning to full-time employment.'
};
export const ibm: Job = {
  startDate: '1999',
  endDate: '1999',
  title: 'C/C++ Programmer',
  employer: 'IBM Global Services Australia',
  location: 'Sydney',
  description:
    '3-month contract during a year out travelling the world. Working as part of a team finding and fixing Y2K issues. This expanded to checking a variety of languages including Visual Basic, Java and Unix shell scripts along with C and C++. Wrote simple Java tools to locate tokens and automate fixes.'
};
export const icl: Job = {
  startDate: '1994',
  endDate: '1995',
  title: 'Industrial Trainee',
  employer: 'ICL (now part of Fujitsu)',
  location: 'Bracknell',
  description:
    'Placement year while studying at university. Role included:\n' +
    '- Programming in C under various Unix based systems.\n' +
    '- Writing shell scripts.\n' +
    '- Building, installing and testing new products on various machines.\n' +
    '- Preparing and giving presentations for new products.'
};
export const polarisLeadDeveloper: Job = {
  startDate: '2013',
  endDate: '2017',
  title: 'Lead Developer',
  employer: 'Polaris Elements',
  location: 'Taunton',
  description:
    'Quickly promoted to Lead Developer, managing a team of 5 developers working on multiple projects including applications and services based around POS systems. Key contributions:\n' +
    '- Actively developed on all of the Delphi, PHP and JavaScript projects.\n' +
    '- Mentored developers to improve the quality of code produced by the team.\n' +
    '- Introduced unit testing, bringing large parts of the legacy codebase under test.\n' +
    '- Migrated the team to an agile framework based around Scrum.'
};
export const polarisLeadDeveloperScrum: Job = {
  startDate: '2017',
  title: 'Lead Developer',
  employer: 'Polaris Elements',
  location: 'Remote',
  description:
    'Following a restructure, became an integral part of a Scrum team, keeping the Lead Developer title because leading by example and mentoring remained essential to the role. Tasks include:\n' +
    '- Coding in various languages, including Delphi, PHP, JavaScript and TypeScript.\n' +
    '- Mentoring developers through pairing and code review, and championing practices such as TDD, infrastructure as code and dev containers.\n' +
    '- Automating provisioning of resources with Terraform and Ansible where possible.\n' +
    '- Building CI/CD pipelines with GitHub Actions that automatically test and deploy changes, enabling faster, more reliable releases.\n' +
    '- Containerising dev environments and supporting services such as databases, queues and APIs for faster onboarding.\n' +
    '- Directing AI coding agents to produce test-driven code guided by agent instructions and verified through red-green TDD cycles and code review.'
};
export const polarisSeniorDeveloper: Job = {
  startDate: '2012',
  endDate: '2013',
  title: 'Senior Developer',
  employer: 'Polaris Elements',
  location: 'Taunton',
  description:
    'Re-joined previous employer after change of ownership and rebranding. Key contributions:\n' +
    '- Designed and built an online loyalty system as a solo project, with a RESTful API, using PHP (CodeIgniter), Bootstrap and MySQL.\n' +
    '- Migrated source code from Subversion to Git, initially using GitLab and then later GitHub.\n' +
    '- Set-up and maintained various Linux VMs running on Citrix XenServer hosted on multiple dedicated physical on-prem servers.'
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
