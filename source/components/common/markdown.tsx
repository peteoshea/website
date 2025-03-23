import micromark from 'micromark';
import React from 'react';

type Props = {
  content: string;
};

export const Markdown = ({ content }: Props): React.JSX.Element => (
  <div className="markdown" dangerouslySetInnerHTML={{ __html: micromark(content) }}></div>
);

export default Markdown;
