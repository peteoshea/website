type Props = {
  title: string;
  children?: React.ReactNode;
};

export const CvSection = ({ title, children }: Props): React.JSX.Element => (
  <div className="mt-5">
    <h2 className="text-3xl font-semibold tracking-tight text-center text-red-900 mb-2">{title}</h2>
    {children}
  </div>
);

export default CvSection;
