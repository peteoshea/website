import Education from '../../types/education';

type Props = {
  education: Education;
};

export const CvEducationEntry = ({ education }: Props): JSX.Element => (
  <div className="grid grid-cols-3 md:grid-cols-12 md:gap-x-2 pt-4">
    <div className="col-start-3 md:col-start-1 md:col-span-2 tracking-tighter text-right md:text-center my-auto">
      {education.startDate}-{education.endDate}
    </div>
    <div className="row-start-1 md:row-start-auto col-span-2 md:col-span-5 text-lg font-bold my-auto">
      {education.qualification}
    </div>
    <div className="col-span-2 md:col-span-4 font-semibold md:text-center my-auto">
      {education.school}
    </div>
    <div className="text-xs text-right my-auto">{education.location}</div>
    {education.description ? (
      <div className="col-span-3 md:col-start-3 md:col-span-10 text-sm">
        {education.description}
      </div>
    ) : null}
  </div>
);

export default CvEducationEntry;
