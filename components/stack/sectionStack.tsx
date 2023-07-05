import React from 'react';
import cls from 'classnames';
interface Props {
  children: React.ReactNode;
  reversed?: true;
  classProp?: string;
}

const SectionStack = ({ children, reversed, classProp }: Props) => {
  return (
    <section
      className={
        reversed
          ? cls(classProp, 'flex flex-col-reverse md:flex-row')
          : cls(classProp, 'md:flex')
      }
    >
      {children}
    </section>
  );
};

export default SectionStack;
