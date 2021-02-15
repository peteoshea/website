import Education from '../types/education';
import CvSection from './cvSection';

type Props = {
  educations: Education[];
};

export const CvEducationSection = ({ educations }: Props): JSX.Element => (
  <CvSection title="Education">
    <table className="w-full">
      {educations.map((education) => (
        <>
          <tr key={education.qualification}>
            <td className="pt-4 w-1/6 tracking-tighter text-center">
              {education.startDate}-{education.endDate}
            </td>
            <td className="pt-4 w-1/2 text-lg font-bold">{education.qualification}</td>
            <td className="pt-4 w-1/6 font-semibold">{education.school}</td>
            <td className="pt-4 w-1/6 text-xs text-right">{education.location}</td>
          </tr>
          {education.description ? (
            <tr>
              <td></td>
              <td colSpan={3} className="text-sm">
                {education.description}
              </td>
            </tr>
          ) : null}
        </>
      ))}
    </table>
  </CvSection>
);

export default CvEducationSection;
