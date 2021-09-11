import Qualification from 'types/qualification';

type Props = {
  qualification: Qualification;
};

export const CvQualification = ({ qualification }: Props): JSX.Element => (
  <div className="grid grid-cols-3 md:grid-cols-12 md:gap-x-2 pt-4">
    <div className="col-start-3 md:col-start-1 md:col-span-2 tracking-tighter text-right md:text-center my-auto">
      {qualification.startDate}
      {qualification.startDate != qualification.endDate
        ? '-' + (qualification.endDate ? qualification.endDate : 'Present')
        : ''}
    </div>
    <div className="row-start-1 md:row-start-auto col-span-2 md:col-span-5 text-lg font-bold my-auto">
      {qualification.url ? (
        <a href={qualification.url} className="text-gray-500 hover:text-gray-900">
          {qualification.name}
        </a>
      ) : (
        qualification.name
      )}
    </div>
    <div className="col-span-2 md:col-span-4 font-semibold md:text-center my-auto">
      {qualification.school}
    </div>
    <div className="text-xs text-right my-auto">{qualification.location}</div>
    {qualification.description ? (
      <div className="col-span-3 md:col-start-3 md:col-span-10 text-sm">
        {qualification.description}
      </div>
    ) : null}
  </div>
);

export default CvQualification;
