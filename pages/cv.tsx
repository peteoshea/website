import 'tailwindcss/tailwind.css';
import Footer from '../source/components/footer';
import Metadata from '../source/components/metadata';
import CvSection from '../source/components/cvSection';
import CvEducationSection from '../source/components/cvEducationSection';
import CvEmploymentSection from '../source/components/cvEmploymentSection';
import CvPortfolioSection from '../source/components/cvPortfolioSection';
import CvSkillsSection from '../source/components/cvSkillsSection';

import Education from '../source/types/education';
import Job from '../source/types/job';
import Project from '../source/types/project';
import Skill from '../source/types/skill';

export const CV = (): JSX.Element => {
  const skills: Skill[] = [
    {
      description: 'Next.js'
    },
    {
      description: 'Very experienced with Delphi but can pick up other languages very quickly.'
    },
    {
      description: 'Experience with SQL and database design for MySQL and Firebird databases.'
    },
    {
      description:
        'Good working knowledge of Git with previous exposure to other source control systems.'
    },
    {
      description:
        'Agile development techniques, with Scrum.org Professional Scrum Master I certification.'
    },
    {
      description: 'Unit testing, including use of Test Driven Development.'
    },
    {
      description: 'Web development using PHP including RESTful API design, implementation and use.'
    },
    {
      description: 'Understanding of HTML, CSS, JavaScript, jQuery, JSON, XML.'
    },
    {
      description: 'Virtualisation including use of Vagrant for PHP development environments.'
    },
    {
      description: 'Some recent DevOps exposure, using a combination of Terraform and Ansible.'
    },
    {
      description: 'Use of Python to construct complex Fabric deployment scripts.'
    },
    {
      description: 'Current desktop OS of choice is Windows 10 but experience with MacOS.'
    },
    {
      description: 'System administration skills with Linux (mainly Red Hat based systems).'
    }
  ];
  const projects: Project[] = [
    {
      name: 'This Website',
      url: 'https://github.com/peteoshea/website/'
    }
  ];
  const jobs: Job[] = [
    {
      startDate: '2013',
      endDate: 'Present',
      title: 'Lead Developer',
      employer: 'Polaris Elements',
      location: 'Taunton',
      description:
        'Quickly promoted to Lead Developer, managing a team of 5 developers working on multiple projects including Windows applications and services based around POS systems, written in Delphi, web applications, created with PHP, and legacy jBASE database systems. Tasks include:\
      • Actively developing on all of the Delphi and PHP projects.\
      • Liaising with clients and partners to define development requirements.\
      • Creating specification documents and time estimates.\
      • Allocation of work to ensure the various projects stayed on track.\
      • Mentoring developers to help improve the quality of code produced.'
    },
    {
      startDate: '2012',
      endDate: '2013',
      title: 'Senior Developer',
      employer: 'Polaris Elements',
      location: 'Taunton',
      description:
        'Re-joined the Delphi team for previous employer after change of ownership. Other tasks:\
      • Solo project to design and build online loyalty system with a RESTful web service API.\
      • Chose to write this in PHP using the CodeIgniter framework with a Bootstrap based front-end.\
      • Implemented a move of all source code from Subversion to Git which greatly improved development flexibility.\
      • Setting up and maintaining various Linux VMs including Apache and MySQL servers, a company wide mail server and a GitLab server all running on Citrix XenServer hosted on multiple dedicated servers.'
    },
    {
      startDate: '2010',
      endDate: 'Present',
      title: 'Self Employed',
      employer: "Pete O'Shea",
      location: 'Taunton',
      description:
        'Started a small business. Very varied work including:\
      • Creation of an iOS app to help find suitable ski accommodation.\
      • Bespoke Delphi application for a waste management company.\
      • Web site design and setup of e-commerce sites.\
      • Regular Delphi development for previous employer.\
      This was the sole source of income for two years but was scaled back after returning to full-time employment. Now just occasional ongoing maintenance of a few websites that are still active.'
    },
    {
      startDate: '2000',
      endDate: '2010',
      title: 'Consultant',
      employer: 'FBH Associates',
      location: 'Taunton',
      description:
        'Started off working on UniVerse, and later jBASE, systems for the first few years. This included system administration of Unix, and later various Linux, systems. Cross trained to Delphi, outside office hours, creating a small Windows application which is still currently in use internally. Soon became an integral part of the Delphi team working on the main POS products. Roles included:\
      • Delphi development as part of a small team.\
      • Source control using CVS and later Subversion.\
      • Craft SQL to access the Firebird databases used to store the POS data.\
      • Design and create various reports for end users.'
    },
    {
      startDate: '1999',
      endDate: '1999',
      title: 'C/C++ Programmer',
      employer: 'IBM Global Services Australia',
      location: 'Sydney',
      description:
        '3 month contract during a year out travelling the world. Working as part of a team to check code for any Y2K issues and fix, as appropriate. This expanded to checking a variety of different languages including Visual Basic, Java and Unix shell scripts along with C and C++. Some simple Java programming helped locate tokens and automate fixes.'
    },
    {
      startDate: '1997',
      endDate: '1998',
      title: 'Analyst Programmer',
      employer: 'Brithene Films',
      location: 'Bridgwater',
      description:
        'Database programmer for a manufacturing company. Developing mainly with UniVerse BASIC, but some contact with Visual Basic. The work comprised of controlling the entry, storage and analysis of data relating to production, sales and accounts along with maintaining a mainframe system.'
    },
    {
      startDate: '1994',
      endDate: '1995',
      title: 'Industrial Trainee',
      employer: 'ICL (now part of Fujitsu)',
      location: 'Bracknell',
      description:
        'Placement year while studying at university. Roles included the following:\
      • Programming in C under various Unix based systems.\
      • Writing shell scripts.\
      • Building, installing and testing new products on various machines.\
      • Preparation and execution of presentations for new products.'
    }
  ];
  const educations: Education[] = [
    {
      startDate: '1992',
      endDate: '1996',
      qualification: 'Mathematics & Computing BSc (Hons)',
      school: 'University of Bath',
      location: 'Bath'
    },
    {
      startDate: '1990',
      endDate: '1992',
      qualification: '4 A-Levels',
      school: 'Taunton School',
      location: 'Taunton',
      description: 'Maths (A), Further Maths (C), Physics (C), Business Studies (C)'
    },
    {
      startDate: '1985',
      endDate: '1990',
      qualification: '9 GCSEs',
      school: 'Taunton School',
      location: 'Taunton',
      description:
        'Maths (A), Physics (A), Chemistry (A), Additional Maths (B), French (B), Biology (B), Business Studies (C), English Literature (C), English Language (C)'
    }
  ];

  return (
    <>
      <Metadata title="CV" />

      <div className="relative bg-white overflow-hidden max-w-7xl mx-auto">
        <div className="relative pt-4 px-4">
          <nav
            className="relative flex items-center justify-between h-20 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/">
                  <img className="h-auto w-auto" src="/favicon-96x96.png" />
                </a>
              </div>
            </div>
            <div className="block ml-10 pr-4 space-x-8">
              <a href="/cv" className="font-medium text-gray-500 hover:text-gray-900">
                CV
              </a>
            </div>
          </nav>
        </div>

        <main className="mt-2 mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              <div className="text-red-800">Pete O&apos;Shea</div>
              <div className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
                Curriculum Vitae / Resume
              </div>
            </h1>
          </div>

          <CvSection title="Profile">
            <div className="mt-2">
              Highly motivated software developer with over 20 years of experience using various
              languages and development environments. Works well as part of a team, with experience
              as junior programmer all the way up to lead developer, mentoring junior programmers.
              Also comfortable working on solo projects from concept all the way through to
              completion. Strong belief in clean, simple code and always keen to learn new skills.
            </div>
            <div className="flex justify-evenly items-center mt-2">
              <div className="mx-2">
                <a href="mailto:mail@peteoshea.co.uk" className="text-gray-500 hover:text-gray-900">
                  mail@peteoshea.co.uk
                </a>
              </div>
              <div className="mx-2">
                <a
                  href="https://github.com/peteoshea"
                  className="text-gray-500 hover:text-gray-900"
                >
                  peteoshea
                </a>
              </div>
              <div className="mx-2">
                <a
                  href="https://twitter.com/peteoshea"
                  className="text-gray-500 hover:text-gray-900"
                >
                  @peteoshea
                </a>
              </div>
              <div className="mx-2">
                <a
                  href="https://www.linkedin.com/in/pete-o-shea-9a072126/"
                  className="text-gray-500 hover:text-gray-900"
                >
                  Pete O&apos;Shea
                </a>
              </div>
            </div>
          </CvSection>

          <CvSkillsSection skills={skills} />
          <CvPortfolioSection projects={projects} />
          <CvEmploymentSection jobs={jobs} />
          <CvEducationSection educations={educations} />
        </main>
      </div>

      <Footer />
    </>
  );
};

export default CV;
