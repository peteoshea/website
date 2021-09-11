import 'tailwindcss/tailwind.css';
import Footer from 'components/common/footer';
import Metadata from 'components/common/metadata';
import Navbar from 'components/common/navbar';

export const Home = (): JSX.Element => (
  <>
    <Metadata />

    <div className="relative bg-white overflow-hidden max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-72">
        <svg
          className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <Navbar currentPage="Home" />
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 lg:px-8 lg:mt-20">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              <div>Welcome to the website of </div>
              <div className="text-red-800">Pete O&apos;Shea</div>
            </h1>
          </div>
        </main>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/Writing-Tools.jpg"
          alt=""
        />
      </div>
    </div>

    <Footer />
  </>
);

export default Home;
