import Image from 'next/image';
import { Section } from 'types/section';

type Props = {
  currentPage?: string;
  // The Section the current page belongs to (e.g. on a Post page): highlighted but still a link.
  currentSection?: string;
  sections?: Section[];
};

const linkStyle = 'font-medium text-gray-500 hover:text-gray-900';
const currentLinkStyle = 'font-bold text-red-900 hover:text-red-950';

const pageLinks = [
  { label: 'CV', href: '/cv' },
  { label: 'About', href: '/about' }
];

export const Navbar = ({
  currentPage,
  currentSection,
  sections = []
}: Props): React.JSX.Element => {
  const links = [
    ...sections.map(({ name, slug }) => ({ label: name, href: `/${slug}` })),
    ...pageLinks
  ];

  return (
    <div className="relative px-2">
      <nav
        className="relative flex items-center justify-between h-20 lg:justify-start"
        aria-label="navigation"
      >
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href={currentPage == 'Home' ? '#' : '/'}>
              <Image
                // The file is 96px: at 64px a high-resolution screen stretches it only by a third.
                className="size-16"
                src="/favicon-96x96.png"
                alt="Home"
                width={96}
                height={96}
              />
            </a>
          </div>
        </div>
        {links.map(({ label, href }) => {
          const isCurrentPage = label === currentPage;
          const isCurrentSection = label === currentSection;
          return (
            <div key={label} className="block px-2 sm:px-4">
              <a
                href={isCurrentPage ? '#' : href}
                aria-current={isCurrentPage ? 'page' : isCurrentSection ? 'true' : undefined}
                className={isCurrentPage || isCurrentSection ? currentLinkStyle : linkStyle}
              >
                {label}
              </a>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
