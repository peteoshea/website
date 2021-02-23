type Props = {
  title: string;
  children?: React.ReactNode;
};

export const CvSection = ({ title, children }: Props): JSX.Element => (
  <div className="mt-5">
    <h2 className="text-3xl tracking-tight text-center mb-2">{title}</h2>
    {children}
  </div>
);

export default CvSection;
