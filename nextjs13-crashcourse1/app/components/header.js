import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Anthony Media</Link>
          <div className="links">
            <Link href="/about">About</Link>
            <Link href="/team">Our Team</Link>
            <Link href="/code/repos">Code</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

//Advantages of React Server components:
// Load faster, smaller client bundle size, SEO friendly, Access to resources client can't access
// Hide sensitive data from the client, More secure against XSS attacks
// Improved developer experience
//Disadvantages:
// Not as interactive, No component State (cannot use 'useState")
// No component lifecycle methods (cannot use useEffect)
