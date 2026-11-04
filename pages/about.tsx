import type { GetStaticProps } from 'next';
import Layout from 'components/common/layout';
import { getVisibleSections } from 'content/posts/posts';
import { Section } from 'types/section';

type Props = {
  sections?: Section[];
};

export const About = ({ sections }: Props): React.JSX.Element => (
  <Layout pageTitle="About" sections={sections}>
    <section className="mt-4">
      <h2 className="mb-2 text-2xl font-bold">Who am I?</h2>
      <p className="mb-2">
        Hi. My name is Pete O&apos;Shea, well actually it&apos;s Peter but pretty much everyone
        calls me Pete. I have lived in the South West of England for pretty much all of my life.
        Born and raised in Somerset, growing up and going to school in Taunton, then off to continue
        my studies in Bath. After university I returned to Taunton and found myself a programming
        job. I worked there for a few years before the travel bug bit and I headed around the world
        on my own for a whole year.
      </p>
      <p className="mb-2">
        After my travels I returned home, as the South West of England will always be home to me,
        once again and continued my career in software development. A few years later I settled down
        and got married, and now we are happily settled, down in Devon.
      </p>
    </section>
    <section className="mt-4">
      <h2 className="mb-2 text-2xl font-bold">What interests me?</h2>
      <p className="mb-2">
        I&apos;m a software developer, working with many different languages over the years. It all
        started with BASIC on a ZX81, my first computer as a young child which shows my age, and
        getting hooked from there.
      </p>
      <p className="mb-2">
        Constant learning was the foundation of my journey as a developer which kept me interested
        over the years, and continues to drive me forward. In previous years this meant diving deep
        into different programming languages, frameworks, and development methodologies to
        continually expand my skill set. The recent explosion of different AI technologies has
        really blown my mind though and I&apos;m excited to see where it all goes.
      </p>
      <p className="mb-2">
        TDD (Test-Driven Development) is something that really resonates with me and I try to
        incorporate into my workflow whenever possible. This includes my use of AI, which seems to
        be a contentious topic right now.
      </p>
    </section>
    <section className="mt-4">
      <h2 className="mb-2 text-2xl font-bold">What am I currently working on?</h2>
      <p className="mb-2">
        At the moment, I&apos;m focused on exploring the latest AI technologies and integrating them
        into my software development projects, both at work and in my personal projects.
      </p>
    </section>
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { sections: getVisibleSections() }
});

export default About;
