import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const navigation = [
    { route: '/', name: 'Home' },
    { route: 'blog', name: 'Blog' },
    { route: 'services', name: 'Services' },
    { route: 'review', name: 'Review' },
  ];
  return (
    <header className="shadow-md">
      <nav className="flex justify-between items-center py-4 px-6">
        <h3 className="uppercase font-bold text-2xl">{`B'N'Brim`}</h3>
        <ul className="flex">
          {navigation.map((item, id) => (
            <Link href={item.route} className="mx-3" key={id}>
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
