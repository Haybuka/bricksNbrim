import React from 'react';
import cls from 'classnames';
import styles from './services.module.css';
import SectionStack from '../stack/sectionStack';
import Image from 'next/image';
const Index = () => {
  return (
    <main className="my-20">
      <section className={cls(styles.banner)}>
        <h3 className="text-xl  md:text-3xl uppercase text-white md:ml-6 tracking-widest">
          Services
        </h3>
      </section>
      <SectionStack classProp="" reversed>
        <aside className="h-[450px] md:w-1/2 bg-orange-700 ">
          <Image
            src="/services/services_one.jpg"
            alt="services"
            width={400}
            height={400}
            className="w-full h-full"
          />
        </aside>
        <article className="flex justify-center items-center md:w-1/2 h-[450px] md:py-0 px-[50px] text-center">
          <div className="">
            <h3 className="font-semibold text-xl md:text-2xl">
              Title of section
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              odio veniam atque rerum? Earum, ipsam explicabo aspernatur ducimus
              inventore iste.
            </p>
          </div>
        </article>
      </SectionStack>
      <SectionStack>
        <article className="flex justify-center items-center md:w-1/2 h-[450px] md:py-0 px-[50px] text-center">
          <div>
            <h3 className="font-semibold text-xl md:text-2xl">
              Title of section
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              odio veniam atque rerum? Earum, ipsam explicabo aspernatur ducimus
              inventore iste.
            </p>
          </div>
        </article>
        <aside className="h-[450px] w-full md:w-1/2 bg-orange-700">
          <Image
            src="/services/services_two.jpg"
            alt="services"
            width={400}
            height={400}
            className="w-full h-full"
          />
        </aside>
      </SectionStack>
      <SectionStack reversed classProp="mb-10">
        <aside className="h-[450px] md:w-1/2 bg-orange-700 ">
          <Image
            src="/services/services_three.jpg"
            alt="services"
            width={400}
            height={400}
            className="w-full h-full"
          />
        </aside>
        <article className="flex justify-center items-center md:w-1/2 h-[450px] md:py-0 px-[50px] text-center">
          <div>
            <h3 className="font-semibold text-xl md:text-2xl">
              Title of section
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              odio veniam atque rerum? Earum, ipsam explicabo aspernatur ducimus
              inventore iste.
            </p>
          </div>
        </article>
      </SectionStack>
    </main>
  );
};

export default Index;
