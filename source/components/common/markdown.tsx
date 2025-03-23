import micromark from 'micromark';
import React from 'react';

import markdownStyle from 'components/common/markdown.module.css';

type Props = {
  content: string;
};

export const Markdown = ({ content }: Props): React.JSX.Element => (
  <div
    className={markdownStyle.markdown}
    dangerouslySetInnerHTML={{ __html: micromark(content) }}
  ></div>
);

export default Markdown;
