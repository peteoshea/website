import Education from '../../types/education';

type Props = {
  education: Education;
};

export const CvEducationEntry = ({ education }: Props): JSX.Element => (
  <div className="grid grid-cols-6 gap-x-4 pt-4">
    <div className="tracking-tighter text-center my-auto">
      {education.startDate}-{education.endDate}
    </div>
    <div className="col-span-3 text-lg font-bold my-auto">{education.qualification}</div>
    <div className="col-span-2 font-semibold text-right my-auto">{education.school}</div>
    {education.description ? (
      <div className="col-start-2 col-span-5 text-sm">{education.description}</div>
    ) : null}
  </div>
);

export default CvEducationEntry;
