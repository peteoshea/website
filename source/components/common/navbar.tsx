import Image from 'next/image';

type Props = {
  currentPage?: string;
};

const links = [
  { label: 'Blog', href: '/blog' },
  { label: 'CV', href: '/cv' },
  { label: 'About', href: '/about' }
];

export const Navbar = ({ currentPage }: Props): React.JSX.Element => (
  <div className="relative pt-4 px-4">
    <nav
      className="relative flex items-center justify-between h-24 lg:justify-start"
      aria-label="navigation"
    >
      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href={currentPage == 'Home' ? '#' : '/'}>
            <Image
              className="h-auto w-auto"
              src="/favicon-96x96.png"
              alt="Home"
              width={96}
              height={96}
            />
          </a>
        </div>
      </div>
      {links.map(({ label, href }) => (
        <div key={label} className="block px-4">
          <a
            href={currentPage == label ? '#' : href}
            className="font-medium text-gray-500 hover:text-gray-900"
          >
            {label}
          </a>
        </div>
      ))}
    </nav>
  </div>
);

export default Navbar;
