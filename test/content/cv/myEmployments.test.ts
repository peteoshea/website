import myEmployment, {
  brithene,
  fbh,
  freelance,
  ibm,
  icl,
  polarisLeadDeveloper,
  polarisSeniorDeveloper
} from 'content/cv/myEmployment';

describe('myEmployment', () => {
  test('polaris lead developer job has start date of 2013', () => {
    expect(polarisLeadDeveloper.startDate).toBe('2013');
  });

  test('polaris lead developer job has no end date', () => {
    expect(polarisLeadDeveloper.endDate).not.toBeDefined();
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
      'Quickly promoted to Lead Developer, managing a team of 5 developers working on multiple projects including Windows applications and services based around POS systems, written in Delphi, web applications, created with PHP. Tasks include:\n' +
        '- Actively developing on all of the Delphi and PHP projects.\n' +
        '- Allocation of work to ensure the various projects stayed on track.\n' +
        '- Mentoring developers to help improve the quality of code produced.\n' +
        '- Unit testing, including getting a lot of legacy Delphi code under test.\n\n' +
        'After a few years, due to the implementation of Scrum and some company restructuring, I stopped managing a team but kept the title as leading by example and mentoring were still part of the role:\n' +
        '- Mainly working on the flagship POS product writing Delphi code using TDD.\n' +
        '- Create and maintain infrastructure as code using Terraform and Ansible for various projects.\n' +
        '- Occasional work on other projects using both PHP & JavaScript, specifically React.\n' +
        '- Performed the role of Scrum Master during our initial switch over to an agile approach.'
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
      'Re-joined the Delphi team for previous employer after change of ownership and company name. Other tasks:\n' +
        '- Solo project to design and build online loyalty system with a RESTful web service API.\n' +
        '- Chose to write this in PHP using the CodeIgniter framework with a Bootstrap based front-end.\n' +
        '- Implemented a move of all source code from Subversion to Git which greatly improved development flexibility.\n' +
        '- Setting up and maintaining various Linux VMs including Apache and MySQL servers, a company wide mail server and a GitLab server all running on Citrix XenServer hosted on multiple dedicated servers.'
    );
  });

  test('contains polaris senior developer job', () => {
    expect(myEmployment).toContain(polarisSeniorDeveloper);
  });

  test('freelance job has start date of 2010', () => {
    expect(freelance.startDate).toBe('2010');
  });

  test('freelance job has no end date', () => {
    expect(freelance.endDate).not.toBeDefined();
  });

  test('freelance job has title of freelance software developer', () => {
    expect(freelance.title).toBe('Freelance Software Developer');
  });

  test('freelance job has employer of self employed', () => {
    expect(freelance.employer).toBe('Self Employed');
  });

  test('freelance job has location of home', () => {
    expect(freelance.location).toBe('Home');
  });

  test('freelance job description is set', () => {
    expect(freelance.description).toBe(
      'Started a small business. Very varied work including:\n' +
        '- Creation of an iOS app to help find suitable ski accommodation.\n' +
        '- Bespoke Delphi application for a waste management company.\n' +
        '- Web site design and setup of e-commerce sites.\n' +
        '- Regular Delphi development for previous employer.\n\n' +
        'This was the sole source of income for two years but was scaled back after returning to full-time employment. Now just occasional ongoing maintenance and tinkering on personal projects.'
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
      'Started off working on UniVerse, and later jBASE, systems for the first few years. This included system administration of Unix, and later various Linux, systems. Cross trained to Delphi, outside office hours, creating a small Windows application which was used internally for many years. Soon became an integral part of the Delphi team working on the main POS products. Roles included:\n' +
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
      '3 month contract during a year out travelling the world. Working as part of a team to check code for any Y2K issues. This expanded to checking a variety of different languages including Visual Basic, Java and Unix shell scripts along with C and C++. Some simple Java programming helped locate tokens and automate fixes.'
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
      'Database programmer for a manufacturing company. Developing mainly with UniVerse BASIC, but some contact with Visual Basic. The work comprised of controlling the entry, storage and analysis of data relating to production, sales and accounts along with maintaining a mainframe system.'
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
    expect(icl.employer).toBe('ICL (International Computers Limited)');
  });

  test('icl job has location of bracknell', () => {
    expect(icl.location).toBe('Bracknell');
  });

  test('icl job description is set', () => {
    expect(icl.description).toBe(
      'Placement year while studying at university. Roles included the following:\n' +
        '- Programming in C under various Unix based systems.\n' +
        '- Writing shell scripts.\n' +
        '- Building, installing and testing new products on various machines.\n' +
        '- Preparation and execution of presentations for new products.'
    );
  });

  test('contains icl job', () => {
    expect(myEmployment).toContain(icl);
  });
});
