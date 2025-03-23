import React from 'react';

import CvSection from '@/source/components/cv/section';
import Project from '@/source/types/project';

type Props = {
  projects: Project[];
};

export const CvPortfolioSection = ({ projects }: Props): React.JSX.Element => (
  <CvSection title="Portfolio">
    <div className="flex flex-col">
      {projects.map((project, index) => (
        <div key={index}>
          <a
            href={project.url}
            className="flex flex-col sm:flex-row items-center text-gray-500 hover:text-gray-900 hover:bg-gray-50"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className={
                  'w-1/2 sm:w-1/3 object-contain max-h-60 md:max-h-72 p-4' +
                  (index % 2 ? ' order-last' : '')
                }
              />
            ) : null}
            <div className={'w-1/2 sm:w-2/3 p-4' + (index % 2 ? ' text-right' : '')}>
              <h3 className="text-xl pb-2">{project.name}</h3>
              {project.description ? <div>{project.description}</div> : null}
            </div>
          </a>
        </div>
      ))}
    </div>
  </CvSection>
);

export default CvPortfolioSection;
