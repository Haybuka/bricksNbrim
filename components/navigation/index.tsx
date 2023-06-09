import Link from 'next/link';
import React from 'react';
import styles from './index.module.css';
import cls from 'classnames';
import Button from '@/utils/button/button';
const Navbar = () => {
  const navigation = [
    { route: '/', name: 'Home' },
    { route: 'blog', name: 'Blog' },
    { route: 'services', name: 'Services' },
    { route: 'review', name: 'Review' },
  ];
  return (
    <header>
      <nav className={styles.nav}>
        <h3 className="uppercase font-bold text-2xl flex justify-between items-center">
          <p> {`B'N'Brim`}</p>
          <div className={cls(styles.harmburger)}>
            <span className="bg-black h-[5px] rounded-sm w-9 block"></span>
            <span className="bg-black h-[5px] rounded-sm w-9 block my-1"></span>
            <span className="bg-black h-[5px] rounded-sm w-9 block"></span>
          </div>
        </h3>
        <ul className="hidden md:flex items-center text-center">
          {navigation.map((item, id) => (
            <Link
              href={item.route}
              className="block my-4 md:my-0 md:mx-3"
              key={id}
            >
              {item.name}
            </Link>
          ))}
          <Button
            text="Contact us"
            propStyle="md:ml-2 block md:inline-block hover:bg-white hover:text-black hover:shadow-md text-center"
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
