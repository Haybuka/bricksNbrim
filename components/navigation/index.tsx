import React, { useContext } from 'react';
import styles from './index.module.css';
import cls from 'classnames';
import MobileNav from './mobile';
import DesktopNav from './desktop';
import { NavContext } from '@/context/navcontext/navContext';
import Link from 'next/link';

const Navbar = () => {
  const { isNavOpen, handleNavState } = useContext(NavContext);

  const navigation = [
    {
      route: '/',
      name: 'Home',
    },
    {
      route: 'services',
      name: 'Services',
    },
    {
      route: 'gallery',
      name: 'Gallery',
    },
    {
      route: '/',
      name: 'Blog',
    },
  ];

  return (
    <header>
      <nav
        className={
          isNavOpen ? cls(styles.nav, '') : cls(styles.nav, 'h-[80px]')
        }
      >
        <h3 className="uppercase font-bold text-2xl flex justify-between items-center">
          <Link href="/" className="flex items-center text-orange-700 ">
            <p className="text-5xl">B</p>
            <div className="relative">
              <span className="block text-lg -my-3">RICKS</span>
              <span className="block text-lg -my-3">RIM</span>
              <span className="absolute right-0 rotate-12 text-sm top-1/2 -translate-y-1/2 text-[#612006]">
                {`'n'`}
              </span>
            </div>
          </Link>
          <div className={cls(styles.harmburger)} onClick={handleNavState}>
            <span className="bg-black h-[5px] rounded-sm w-9 block"></span>
            <span className="bg-black h-[5px] rounded-sm w-9 block my-1"></span>
            <span className="bg-black h-[5px] rounded-sm w-9 block"></span>
          </div>
        </h3>
        <DesktopNav navigate={navigation} />
        <div
          className={
            isNavOpen
              ? cls(
                  'translate-x-0 md:hidden items-center text-center transition-all'
                )
              : cls(
                  'md:hidden items-center text-center transition-all -translate-x-[1000px]'
                )
          }
        >
          <MobileNav navigate={navigation} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
