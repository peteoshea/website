import 'tailwindcss/index.css';
import Footer from 'components/common/footer';
import Metadata from 'components/common/metadata';
import Navbar from 'components/common/navbar';
import { Section } from 'types/section';

type Props = {
  children?: React.ReactNode;
  heading?: string;
  subheading?: string;
  pageTitle: string;
  currentPage?: string;
  currentSection?: string;
  sections?: Section[];
};

export const Layout = ({
  children,
  heading,
  subheading,
  pageTitle,
  currentPage = pageTitle,
  currentSection,
  sections
}: Props): React.JSX.Element => {
  let pageHeading = heading;
  if (!heading) {
    pageHeading = pageTitle;
  }

  return (
    <>
      <Metadata pageTitle={pageTitle} />
      <div className="relative bg-white max-w-7xl mx-auto">
        <Navbar currentPage={currentPage} currentSection={currentSection} sections={sections} />
        <header className="mt-2 px-4 tracking-tight text-center">
          <h1 className="text-red-800 font-bold text-4xl sm:text-5xl lg:text-6xl">{pageHeading}</h1>
          {subheading ? (
            <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">{subheading}</h2>
          ) : null}
        </header>
        <main className="mt-2 px-4">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
