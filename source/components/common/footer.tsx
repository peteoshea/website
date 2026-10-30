import Image from 'next/image';

export const Footer = (): React.JSX.Element => (
  <footer className="flex max-w-7xl mx-auto items-end justify-center w-full h-20 px-2 py-4 text-xs">
    <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
      <Image
        src="/cc.svg"
        alt="Creative Commons Licence"
        width={64}
        height={64}
        unoptimized
        className="inline h-4 w-auto ml-1"
      />
      <Image
        src="/by.svg"
        alt="Attribution"
        width={64}
        height={64}
        unoptimized
        className="inline h-4 w-auto ml-1"
      />
    </a>
    <span className="inline ml-1 tracking-tighter">
      Content on this site is licensed under a{' '}
      <a
        rel="license"
        href="http://creativecommons.org/licenses/by/4.0/"
        className="tracking-tighter text-gray-500 hover:text-gray-900"
      >
        Creative Commons Attribution 4.0 International License
      </a>
      .
    </span>
  </footer>
);

export default Footer;
