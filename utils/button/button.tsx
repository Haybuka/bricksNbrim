import cls from 'classnames';
import styles from './button.module.css';
import Link from 'next/link';

interface Props {
  text: string;
  propStyle?: string;
  href?: string;
}

const Button = ({ text, propStyle, href }: Props) => {
  return (
    <Link
      href={`${href ? href : '/'}`}
      className={cls(styles.btn, styles.btn_bricks, propStyle)}
    >
      {text}
    </Link>
  );
};

export default Button;
