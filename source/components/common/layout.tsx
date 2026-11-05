import 'tailwindcss/index.css';
import Footer from 'components/common/footer';
import Metadata from 'components/common/metadata';
import Navbar from 'components/common/navbar';
import { Section } from 'types/section';

type Props = {
  children?: React.ReactNode;
  // Shown above the heading, pinned in place while the rest of the page scrolls over it.
  banner?: React.ReactNode;
  // Text, or an element such as an image whose alt text names the page.
  heading?: React.ReactNode;
  subheading?: string;
  pageTitle: string;
  currentPage?: string;
  currentSection?: string;
  sections?: Section[];
};

export const Layout = ({
  children,
  banner,
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
        {banner ? <div className="sticky top-0">{banner}</div> : null}
        <div className="relative z-10 bg-white pt-2">
          <header className="px-4 tracking-tight text-center">
            <h1 className="text-red-800 font-bold text-4xl sm:text-5xl lg:text-6xl">
              {pageHeading}
            </h1>
            {subheading ? (
              <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">{subheading}</h2>
            ) : null}
          </header>
          <main className="mt-2 px-4">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
