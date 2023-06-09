import cls from 'classnames';
import styles from './button.module.css';
import Link from 'next/link';

interface Props {
  text: string;
  propStyle?: string;
}

const Button = ({ text, propStyle }: Props) => {
  return (
    <Link href="/" className={cls(styles.btn, styles.btn_default, propStyle)}>
      {text}
    </Link>
  );
};

export default Button;
