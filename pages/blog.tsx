import 'tailwindcss/tailwind.css';
import Footer from 'components/common/footer';
import Metadata from 'components/common/metadata';
import Navbar from 'components/common/navbar';

export const Blog = (): JSX.Element => (
  <>
    <Metadata title="Blog Posts" />
    <div className="relative bg-white max-w-7xl mx-auto">
      <Navbar currentPage="Blog" />
      <main className="mt-2 mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            <div className="text-red-800">Blog Posts</div>
          </h1>
        </div>
      </main>
    </div>
    <Footer />
  </>
);

export default Blog;
