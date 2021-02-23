import Project from '../types/project';
import CvSection from './cv/section';

type Props = {
  projects: Project[];
};

export const CvPortfolioSection = ({ projects }: Props): JSX.Element => (
  <CvSection title="Portfolio">
    <div className="flex flex-col">
      {projects.map((project, index) => (
        <div key={index} className="text-center">
          <a href={project.url} className="text-gray-500 hover:text-gray-900">
            {project.name}
          </a>
        </div>
      ))}
    </div>
  </CvSection>
);

export default CvPortfolioSection;
