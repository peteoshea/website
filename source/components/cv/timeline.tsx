import CvSection from 'components/cv/section';
import TimelineEntry from 'types/timelineEntry';

type Props = {
  title: string;
  entries: TimelineEntry[];
};

export const CvTimeline = ({ title, entries }: Props): React.JSX.Element => (
  <CvSection title={title}>
    {entries.map((entry, index) => (
      <div className="grid grid-cols-3 md:grid-cols-12 md:gap-x-2 pt-4" key={index}>
        <div className="col-start-3 md:col-start-1 md:col-span-2 tracking-tighter text-right md:text-center my-auto">
          {entry.startDate}
          {entry.startDate != entry.endDate
            ? '–' + (entry.endDate ? entry.endDate : 'Present')
            : ''}
        </div>
        <div className="row-start-1 md:row-start-auto col-span-2 md:col-span-5 text-lg font-bold my-auto">
          {entry.title}
        </div>
        <div className="col-span-2 md:col-span-4 font-semibold md:text-center my-auto">
          {entry.organisation}
        </div>
        <div className="text-xs text-right my-auto">{entry.location}</div>
      </div>
    ))}
  </CvSection>
);

export default CvTimeline;
