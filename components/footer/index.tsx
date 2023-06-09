import React from 'react';
import Section from './section';

const Footer = () => {
  const about = ['Our story', 'Designer', 'Products'];
  const support = [`FAQ's`, 'Features', 'Help center'];
  const contact = [`+234 817 7434`, 'mail@gmail.com'];
  return (
    <footer className="py-10 px-4 ">
      <div className="md:flex justify-between items-start ">
        <section>
          <h3 className="uppercase font-bold text-2xl">Bricks Brim</h3>
        </section>
        <Section heading="About us" list={about} />
        <Section heading="Support" list={support} />
        <Section heading="Contact us" list={contact} />
      </div>
      <aside className="flex justify-center border-t-2 pt-4 md:my-8">
        <p>&copy; 2023; Bricks and Brim</p>
      </aside>
    </footer>
  );
};

export default Footer;
