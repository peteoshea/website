import Footer from 'components/common/footer';
import Metadata from 'components/common/metadata';
import Navbar from 'components/common/navbar';

type Props = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: Props): JSX.Element => (
  <>
    <Metadata />
    <Navbar />
    <main className="mt-2 mx-auto max-w-7xl px-4">{children}</main>
    <Footer />
  </>
);

export default Layout;
