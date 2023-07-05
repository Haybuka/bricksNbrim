import cls from 'classnames';
import styles from './button.module.css';
import Link from 'next/link';

interface Props {
  text: string;
  propStyle?: string;
  href?: string;
  handleClick?: () => void;
}

const Button = ({ text, propStyle, href, handleClick }: Props) => {
  return (
    <Link
      href={`${href ? href : '/'}`}
      onClick={handleClick}
      className={cls(styles.btn, styles.btn_bricks, propStyle)}
    >
      {text}
    </Link>
  );
};

export default Button;
