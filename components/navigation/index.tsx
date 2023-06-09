import Link from 'next/link';
import React from 'react';
import styles from './index.module.css';
import cls from 'classnames';
const Navbar = () => {
  const navigation = [
    { route: '/', name: 'Home' },
    { route: 'blog', name: 'Blog' },
    { route: 'services', name: 'Services' },
    { route: 'review', name: 'Review' },
  ];
  return (
    <header className="shadow-md">
      <nav className="md:flex justify-between items-center py-4 px-2 md:px-6 relative">
        <h3 className="uppercase font-bold text-2xl flex justify-between items-center">
          <p> {`B'N'Brim`}</p>
          <div className={cls(styles.harmburger)}>
            <span className="bg-black h-[5px] w-10 block"></span>
            <span className="bg-black h-[5px] w-10 block my-1"></span>
            <span className="bg-black h-[5px] w-10 block"></span>
          </div>
        </h3>
        <ul className="block md:flex">
          {navigation.map((item, id) => (
            <Link
              href={item.route}
              className="block my-4 md:my-0 md:mx-3"
              key={id}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
