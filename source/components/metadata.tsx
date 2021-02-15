import Head from 'next/head';

type Props = {
  title?: string;
};

export const Metadata = ({ title }: Props): JSX.Element => (
  <Head>
    <title>
      {title}
      {title ? ' | ' : ''}Pete O&apos;Shea
    </title>
    <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
  </Head>
);

export default Metadata;
