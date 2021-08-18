export const Navbar = (): JSX.Element => (
  <div className="relative pt-4 px-4">
    <nav
      className="relative flex items-center justify-between h-24 lg:justify-start"
      aria-label="navigation"
    >
      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="/">
            <img className="h-auto w-auto" src="/favicon-96x96.png" />
          </a>
        </div>
      </div>
      <div className="block px-4">
        <a href="/blog" className="font-medium text-gray-500 hover:text-gray-900">
          Blog
        </a>
      </div>
      <div className="block px-4">
        <a href="/cv" className="font-medium text-gray-500 hover:text-gray-900">
          CV
        </a>
      </div>
    </nav>
  </div>
);

export default Navbar;
