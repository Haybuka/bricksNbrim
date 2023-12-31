import React from 'react';

interface Prop {
  heading: string;
  list: string[];
}

const Section = ({ heading, list }: Prop) => {
  return (
    <section className="my-10 md:my-0">
      <h3 className="font-semibold text-xl mb-3">{heading}</h3>
      <ul>
        {list.map((item, id) => (
          <li className="my-3" key={id}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Section;
