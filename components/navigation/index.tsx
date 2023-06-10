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
          <aside className="flex items-center text-orange-700 ">
            <p className="text-5xl">B</p>
            <div className="relative">
              <span className="block text-lg -my-3">RICKS</span>
              <span className="block text-lg -my-3">RIM</span>
              <span className="absolute right-0 rotate-12 text-sm top-1/2 -translate-y-1/2 text-[#612006]">
                {`'n'`}
              </span>
            </div>
          </aside>
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
