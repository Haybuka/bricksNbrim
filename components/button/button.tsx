import React from 'react';

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return <button className="bg-black text-white py-2 px-6 my-4">{text}</button>;
};

export default Button;
