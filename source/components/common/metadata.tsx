import Head from 'next/head';
import React from 'react';

type Props = {
  pageTitle?: string;
};

export const Metadata = ({ pageTitle }: Props): React.JSX.Element => {
  const title = `${pageTitle ? pageTitle + ' | ' : ''}Pete O'Shea`;

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
    </Head>
  );
};

export default Metadata;
