import Footer from 'components/common/footer';
import Metadata from 'components/common/metadata';
import Navbar from 'components/common/navbar';

type Props = {
  children?: React.ReactNode;
  heading?: string;
  subheading?: string;
  title: string;
};

export const Layout = ({ children, heading, subheading, title }: Props): JSX.Element => {
  let pageHeading = heading;
  if (!heading) {
    pageHeading = title;
  }

  return (
    <>
      <Metadata title={title} />
      <div className="relative bg-white max-w-7xl mx-auto">
        <Navbar />
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
