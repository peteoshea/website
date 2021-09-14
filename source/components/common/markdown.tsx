import markdownStyle from 'components/common/markdown.module.css';
import micromark from 'micromark';

type Props = {
  content: string;
};

export const Markdown = ({ content }: Props): JSX.Element => (
  <div
    className={markdownStyle.markdown}
    dangerouslySetInnerHTML={{ __html: micromark(content) }}
  ></div>
);

export default Markdown;
