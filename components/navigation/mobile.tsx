import Button from '@/utils/button/button';
import Link from 'next/link';
import cls from 'classnames';

interface Props {
  navState: boolean;
  navigate: NavItems[];
}

export interface NavItems {
  route: string;
  name: string;
}
const MobileNav = ({ navigate, navState }: Props) => {
  return (
    <>
      {navState && (
        <ul className={cls('block md:hidden items-center text-center')}>
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
            propStyle="md:ml-2 block md:inline-block hover:bg-white hover:text-black hover:shadow-md text-center"
          />
        </ul>
      )}
    </>
  );
};

export default MobileNav;
