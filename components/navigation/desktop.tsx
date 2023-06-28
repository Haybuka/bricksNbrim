import Button from '@/utils/button/button';
import Link from 'next/link';
import cls from 'classnames';
import { NavItems } from './mobile';

interface Props {
  navigate: NavItems[];
}

const DesktopNav = ({ navigate }: Props) => {
  return (
    <>
      <ul className={cls('hidden md:flex items-center text-center text-black')}>
        {navigate.map((item, id) => (
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
          href="contact"
          propStyle="md:ml-2 block md:inline-block hover:bg-white hover:text-black hover:shadow-md text-center"
        />
      </ul>
    </>
  );
};

export default DesktopNav;
