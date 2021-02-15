import 'tailwindcss/tailwind.css';
import Footer from '../source/components/footer';
import Metadata from '../source/components/metadata';
import CvSection from '../source/components/cvSection';
import CvEducationSection from '../source/components/cvEducationSection';

import Education from '../source/types/education';

export const CV = (): JSX.Element => {
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

          <CvSection title="Skills">
            <div>TODO</div>
          </CvSection>

          <CvSection title="Portfolio">
            <div>TODO</div>
          </CvSection>

          <CvSection title="Employment History">
            <div>TODO</div>
          </CvSection>

          <CvEducationSection educations={educations} />
        </main>
      </div>

      <Footer />
    </>
  );
};

export default CV;
