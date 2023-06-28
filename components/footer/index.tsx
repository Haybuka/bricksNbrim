import React from 'react';
import Section from './section';
import Image from 'next/image';

const Footer = () => {
  const about = ['Our story', 'Designer', 'Products'];
  const support = [`FAQ's`, 'Features', 'Help center'];
  const contact = [`+234 817 7434`, 'mail@gmail.com'];
  const icons = [
    { name: 'twitter', url: '/social_icons/twitter.svg' },
    { name: 'linkedIn', url: '/social_icons/linked.svg' },
    { name: 'youtube', url: '/social_icons/youtube.svg' },
    { name: 'instagram', url: '/social_icons/insta.svg' },
  ];

  return (
    <footer className="py-6 px-4 bg-white text-black">
      <div className="md:flex justify-between items-start flex-row-reverse">
        <Section heading="About us" list={about} />
        <Section heading="Support" list={support} />
        <Section heading="Contact us" list={contact} />
        <section className="mb-6 md:mb-0">
          <aside className="flex items-center text-black font-bold">
            <p className="text-5xl">B</p>
            <div>
              <span className="block -my-2">RICKS</span>
              <span className="block -my-2">RIM</span>
            </div>
          </aside>
          <p className="my-3">
            <span className="block">509 S Glenoaks Bloulevard</span>
            <span className="block">Burbank, California.</span>
          </p>
          <ul className="flex my-4">
            {icons.map((icon, id) => (
              <li className="rounded-md overflow-hidden mr-3" key={id}>
                <Image src={icon.url} alt={icon.name} width={30} height={30} />
              </li>
            ))}
          </ul>
        </section>
      </div>
      <aside className="flex justify-center border-t-2 pt-6 md:mt-10">
        <p>&copy; 2023; Bricks and Brim</p>
      </aside>
    </footer>
  );
};

export default Footer;
