import Button from '@/utils/button/button';
import Link from 'next/link';
import cls from 'classnames';
import { useContext } from 'react';
import { NavContext } from '@/context/navcontext/navContext';

interface Props {
  navigate: NavItems[];
}

export interface NavItems {
  route: string;
  name: string;
}
const MobileNav = ({ navigate }: Props) => {
  const { isNavOpen } = useContext(NavContext);

  console.log({ isNavOpen });
  return (
    <ul>
      {navigate.map((item, id) => (
        <Link
          href={item.route}
          className="block text-black my-4 md:my-0 md:mx-3"
          key={id}
        >
          {item.name}
        </Link>
      ))}
      <Button
        text="Contact us"
        href="contact"
        propStyle="md:ml-2 block md:inline-block hover:bg-white hover:text-black hover:shadow-md text-center"
      />
    </ul>
  );
};

export default MobileNav;
