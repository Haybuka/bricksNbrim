import Link from 'next/link';
import React, { useState } from 'react';
import styles from './index.module.css';
import cls from 'classnames';
import Button from '@/utils/button/button';
import MobileNav from './mobile';
import DesktopNav from './desktop';
const Navbar = () => {
  const navigation = [
    { route: '/', name: 'Home' },
    { route: 'blog', name: 'Blog' },
    { route: 'services', name: 'Services' },
    { route: 'review', name: 'Review' },
  ];
  const [navState, setNavState] = useState(false);
  return (
    <header>
      <nav className={styles.nav}>
        <h3 className="uppercase font-bold text-2xl flex justify-between items-center">
          <p> {`B'N'Brim`}</p>
          <div
            className={cls(styles.harmburger)}
            onClick={() => setNavState((previous) => !previous)}
          >
            <span className="bg-black h-[5px] rounded-sm w-9 block"></span>
            <span className="bg-black h-[5px] rounded-sm w-9 block my-1"></span>
            <span className="bg-black h-[5px] rounded-sm w-9 block"></span>
          </div>
        </h3>
        <DesktopNav navigate={navigation} />
        <MobileNav navigate={navigation} navState={navState} />
      </nav>
    </header>
  );
};

export default Navbar;
