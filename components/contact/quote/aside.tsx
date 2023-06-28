import Image from 'next/image';
import React from 'react';
import styles from './quote.module.css';
import cls from 'classnames';
interface Prop {
  contactDetails: Details[];
}

interface Details {
  title: string;
  src: string;
  value: string;
}

const Aside = ({ contactDetails }: Prop) => {
  return (
    <aside className={cls(styles.aside)}>
      <ul className="my-4">
        {contactDetails.map((details, index) => (
          <li className="mb-6" key={index}>
            <p className="flex items-center">
              <Image width={20} height={20} alt="" src={details.src} />
              <span className="text-[14px] ml-1 capitalize">
                {details.title}
              </span>
            </p>
            <p className="text-lg my-2">{details.value}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
