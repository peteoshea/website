import Markdown from 'components/common/markdown';
import CvSection from 'components/cv/section';
import formatDateRange from 'content/cv/formatDateRange';
import TimelineEntry from 'types/timelineEntry';

type Props = {
  title: string;
  entries: TimelineEntry[];
};

export const CvTimeline = ({ title, entries }: Props): React.JSX.Element => (
  <CvSection title={title}>
    {entries.map((entry, index) => (
      <div
        className="grid grid-cols-3 md:grid-cols-12 md:gap-x-2 pt-4 border-gray-200 not-first-of-type:mt-6 not-first-of-type:border-t"
        key={index}
      >
        <div className="col-start-3 md:col-start-1 md:col-span-2 tracking-tighter text-right md:text-center my-auto">
          {formatDateRange(entry.startDate, entry.endDate)}
        </div>
        <div className="row-start-1 md:row-start-auto col-span-2 md:col-span-5 text-lg font-bold my-auto">
          {entry.url ? (
            <a href={entry.url} className="text-gray-500 hover:text-gray-900">
              {entry.title}
            </a>
          ) : (
            entry.title
          )}
        </div>
        <div className="col-span-2 md:col-span-4 font-semibold md:text-center my-auto">
          {entry.organisation}
        </div>
        <div className="text-xs text-right my-auto">{entry.location}</div>
        {entry.description ? (
          <div className="col-span-3 md:col-start-3 md:col-span-10 text-sm">
            <Markdown content={entry.description} />
          </div>
        ) : null}
      </div>
    ))}
  </CvSection>
);

export default CvTimeline;
