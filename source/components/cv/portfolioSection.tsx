import Image from 'next/image';
import Project from 'types/project';
import CvSection from 'components/cv/section';

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
            className="group flex flex-col sm:flex-row items-center hover:bg-gray-50"
          >
            {project.image ? (
              <Image
                src={project.image.src}
                alt={project.name}
                width={project.image.width}
                height={project.image.height}
                priority={index === 0}
                className={
                  'w-full sm:w-1/3 h-auto object-contain max-h-60 md:max-h-72 p-4' +
                  (index % 2 ? ' sm:order-last' : '')
                }
              />
            ) : null}
            <div className={'w-full sm:w-2/3 p-4' + (index % 2 ? ' sm:text-right' : '')}>
              <h3 className="text-xl font-semibold pb-2 text-red-800 group-hover:text-red-600">
                {project.name}
              </h3>
              {project.description ? <div>{project.description}</div> : null}
            </div>
          </a>
        </div>
      ))}
    </div>
  </CvSection>
);

export default CvPortfolioSection;
