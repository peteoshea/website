import myEmployment, {
  brithene,
  fbh,
  freelance,
  ibm,
  icl,
  polarisLeadDeveloper,
  polarisLeadDeveloperScrum,
  polarisSeniorDeveloper
} from 'content/cv/myEmployment';

describe('myEmployment', () => {
  test('polaris lead developer scrum role has start date of 2017', () => {
    expect(polarisLeadDeveloperScrum.startDate).toBe('2017');
  });

  test('polaris lead developer scrum role has no end date', () => {
    expect(polarisLeadDeveloperScrum.endDate).not.toBeDefined();
  });

  test('polaris lead developer scrum role has title of lead developer', () => {
    expect(polarisLeadDeveloperScrum.title).toBe('Lead Developer');
  });

  test('polaris lead developer scrum role has employer of polaris elements', () => {
    expect(polarisLeadDeveloperScrum.employer).toBe('Polaris Elements');
  });

  test('polaris lead developer scrum role has location of remote', () => {
    expect(polarisLeadDeveloperScrum.location).toBe('Remote');
  });

  test('polaris lead developer scrum role description is set', () => {
    expect(polarisLeadDeveloperScrum.description).toBe(
      'Following a restructure, became an integral part of a Scrum team, keeping the Lead Developer title because leading by example and mentoring remained essential to the role. Tasks include:\n' +
        '- Coding in various languages, including Delphi, PHP, JavaScript and TypeScript.\n' +
        '- Mentoring developers through pairing and code review, and championing practices such as TDD, infrastructure as code and dev containers.\n' +
        '- Automating provisioning of resources with Terraform and Ansible where possible.\n' +
        '- Building CI/CD pipelines with GitHub Actions that automatically test and deploy changes, enabling faster, more reliable releases.\n' +
        '- Containerising dev environments and supporting services such as databases, queues and APIs for faster onboarding.\n' +
        '- Directing AI coding agents to produce test-driven code guided by agent instructions and verified through red-green TDD cycles and code review.'
    );
  });

  test('contains polaris lead developer scrum role', () => {
    expect(myEmployment).toContain(polarisLeadDeveloperScrum);
  });

  test('polaris lead developer job has start date of 2013', () => {
    expect(polarisLeadDeveloper.startDate).toBe('2013');
  });

  test('polaris lead developer job has end date of 2017', () => {
    expect(polarisLeadDeveloper.endDate).toBe('2017');
  });

  test('polaris lead developer job has title of lead developer', () => {
    expect(polarisLeadDeveloper.title).toBe('Lead Developer');
  });

  test('polaris lead developer job has employer of polaris elements', () => {
    expect(polarisLeadDeveloper.employer).toBe('Polaris Elements');
  });

  test('polaris lead developer job has location of taunton', () => {
    expect(polarisLeadDeveloper.location).toBe('Taunton');
  });

  test('polaris lead developer job description is set', () => {
    expect(polarisLeadDeveloper.description).toBe(
      'Quickly promoted to Lead Developer, managing a team of 5 developers working on multiple projects including applications and services based around POS systems. Key contributions:\n' +
        '- Actively developed on all of the Delphi, PHP and JavaScript projects.\n' +
        '- Mentored developers to improve the quality of code produced by the team.\n' +
        '- Introduced unit testing, bringing large parts of the legacy codebase under test.\n' +
        '- Migrated the team to an agile framework based around Scrum.'
    );
  });

  test('contains polaris lead developer job', () => {
    expect(myEmployment).toContain(polarisLeadDeveloper);
  });

  test('polaris senior developer job has start date of 2012', () => {
    expect(polarisSeniorDeveloper.startDate).toBe('2012');
  });

  test('polaris senior developer job has end date of 2013', () => {
    expect(polarisSeniorDeveloper.endDate).toBe('2013');
  });

  test('polaris senior developer job has title of senior developer', () => {
    expect(polarisSeniorDeveloper.title).toBe('Senior Developer');
  });

  test('polaris senior developer job has employer of polaris elements', () => {
    expect(polarisSeniorDeveloper.employer).toBe('Polaris Elements');
  });

  test('polaris senior developer job has location of taunton', () => {
    expect(polarisSeniorDeveloper.location).toBe('Taunton');
  });

  test('polaris senior developer job description is set', () => {
    expect(polarisSeniorDeveloper.description).toBe(
      'Re-joined previous employer after change of ownership and rebranding. Key contributions:\n' +
        '- Designed and built an online loyalty system as a solo project, with a RESTful API, using PHP (CodeIgniter), Bootstrap and MySQL.\n' +
        '- Migrated source code from Subversion to Git, initially using GitLab and then later GitHub.\n' +
        '- Set-up and maintained various Linux VMs running on Citrix XenServer hosted on multiple dedicated physical on-prem servers.'
    );
  });

  test('contains polaris senior developer job', () => {
    expect(myEmployment).toContain(polarisSeniorDeveloper);
  });

  test('freelance job has start date of 2010', () => {
    expect(freelance.startDate).toBe('2010');
  });

  test('freelance job has end date of 2018', () => {
    expect(freelance.endDate).toBe('2018');
  });

  test('freelance job has title of freelance software engineer', () => {
    expect(freelance.title).toBe('Freelance Software Engineer');
  });

  test('freelance job has employer of self employed', () => {
    expect(freelance.employer).toBe('Self Employed');
  });

  test('freelance job has location of remote', () => {
    expect(freelance.location).toBe('Remote');
  });

  test('freelance job description is set', () => {
    expect(freelance.description).toBe(
      'Started a small business. Very varied work including:\n' +
        '- Creation of an iOS app to help find suitable ski accommodation.\n' +
        '- Bespoke Windows application for a waste management company.\n' +
        '- Website design and setup of e-commerce sites, using the Crystallize GraphQL API.\n' +
        '- Regular software development for previous employer.\n\n' +
        'This was the sole source of income for two years but was scaled back after returning to full-time employment.'
    );
  });

  test('contains freelance job', () => {
    expect(myEmployment).toContain(freelance);
  });

  test('fbh job has start date of 2000', () => {
    expect(fbh.startDate).toBe('2000');
  });

  test('fbh job has end date of 2010', () => {
    expect(fbh.endDate).toBe('2010');
  });

  test('fbh job has title of consultant', () => {
    expect(fbh.title).toBe('Consultant');
  });

  test('fbh job has employer of fbh', () => {
    expect(fbh.employer).toBe('FBH Associates');
  });

  test('fbh job has location of taunton', () => {
    expect(fbh.location).toBe('Taunton');
  });

  test('fbh job description is set', () => {
    expect(fbh.description).toBe(
      'Started off working on UniVerse, and later jBASE, systems for the first few years. This included system administration of Unix, and later various Linux, systems.\n\n' +
        'Cross-trained to Delphi, outside office hours, creating a small Windows application which was used internally for many years. Soon became an integral part of the Delphi team working on the main POS products. Role included:\n' +
        '- Delphi development as part of a small team.\n' +
        '- Source control using CVS and later Subversion.\n' +
        '- Craft SQL to access the Firebird databases used to store the POS data.\n' +
        '- Design and create various reports for end users.\n' +
        '- Liaising with clients and partners to define development requirements.\n' +
        '- Creating specification documents and time estimates.'
    );
  });

  test('contains fbh job', () => {
    expect(myEmployment).toContain(fbh);
  });

  test('ibm job has start date of 1999', () => {
    expect(ibm.startDate).toBe('1999');
  });

  test('ibm job has end date of 1999', () => {
    expect(ibm.endDate).toBe('1999');
  });

  test('ibm job has title of c programmer', () => {
    expect(ibm.title).toBe('C/C++ Programmer');
  });

  test('ibm job has employer of ibm australia', () => {
    expect(ibm.employer).toBe('IBM Global Services Australia');
  });

  test('ibm job has location of sydney', () => {
    expect(ibm.location).toBe('Sydney');
  });

  test('ibm job description is set', () => {
    expect(ibm.description).toBe(
      '3-month contract during a year out travelling the world. Working as part of a team finding and fixing Y2K issues. This expanded to checking a variety of languages including Visual Basic, Java and Unix shell scripts along with C and C++. Wrote simple Java tools to locate tokens and automate fixes.'
    );
  });

  test('contains ibm job', () => {
    expect(myEmployment).toContain(ibm);
  });

  test('brithene job has start date of 1997', () => {
    expect(brithene.startDate).toBe('1997');
  });

  test('brithene job has end date of 1998', () => {
    expect(brithene.endDate).toBe('1998');
  });

  test('brithene job has title of analyst programmer', () => {
    expect(brithene.title).toBe('Analyst Programmer');
  });

  test('brithene job has employer of brithene films', () => {
    expect(brithene.employer).toBe('Brithene Films');
  });

  test('brithene job has location of bridgwater', () => {
    expect(brithene.location).toBe('Bridgwater');
  });

  test('brithene job description is set', () => {
    expect(brithene.description).toBe(
      'Database programmer for a manufacturing company. Developing mainly with UniVerse BASIC, but some contact with Visual Basic. The work involved controlling the entry, storage and analysis of data relating to production, sales and accounts along with maintaining a mainframe system.'
    );
  });

  test('contains brithene job', () => {
    expect(myEmployment).toContain(brithene);
  });

  test('icl job has start date of 1994', () => {
    expect(icl.startDate).toBe('1994');
  });

  test('icl job has end date of 1995', () => {
    expect(icl.endDate).toBe('1995');
  });

  test('icl job has title of industrial trainee', () => {
    expect(icl.title).toBe('Industrial Trainee');
  });

  test('icl job has employer of icl', () => {
    expect(icl.employer).toBe('ICL (now part of Fujitsu)');
  });

  test('icl job has location of bracknell', () => {
    expect(icl.location).toBe('Bracknell');
  });

  test('icl job description is set', () => {
    expect(icl.description).toBe(
      'Placement year while studying at university. Role included:\n' +
        '- Programming in C under various Unix based systems.\n' +
        '- Writing shell scripts.\n' +
        '- Building, installing and testing new products on various machines.\n' +
        '- Preparing and giving presentations for new products.'
    );
  });

  test('contains icl job', () => {
    expect(myEmployment).toContain(icl);
  });
});
