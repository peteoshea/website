import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import Footer from '../source/components/footer';

export const CV = (): JSX.Element => (
  <>
    <Head>
      <title>CV | Pete O&apos;Shea</title>
      <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
    </Head>

    <div className="relative bg-white overflow-hidden max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <div className="relative pt-6 px-4">
          <nav
            className="relative flex items-center justify-between h-24 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/">
                  <img className="h-auto w-auto" src="/favicon-96x96.png" />
                </a>
              </div>
            </div>
            <div className="block ml-10 pr-4 space-x-8">
              <a href="/cv" className="font-medium text-gray-500 hover:text-gray-900">
                CV
              </a>
            </div>
          </nav>
        </div>

        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 lg:px-8">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              <div className="text-2xl sm:text-3xl lg:text-4xl">Curriculum Vitae of </div>
              <div className="text-red-800">Pete O&apos;Shea</div>
            </h1>
          </div>
        </main>
      </div>
    </div>

    <Footer />
  </>
);

export default CV;
