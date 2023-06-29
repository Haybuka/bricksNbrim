import cls from 'classnames';
import styles from './gallery.module.css';
import Button from '@/utils/button/button';
const Index = () => {
  return (
    <main className="mt-20">
      <section className={cls(styles.banner)}>
        <h3 className="text-xl  md:text-3xl uppercase text-white md:ml-6 tracking-widest">
          Gallery
        </h3>
      </section>
      <section className="my-10 px-6 md:px-[30px] lg:px-[80px] lg:flex items-center">
        <aside className="lg:w-1/2">
          <div className="h-[300px]  bg-gray-200 rounded-lg"></div>
          <div className="hidden lg:flex justify-between my-6">
            <p className="w-40 h-40 rounded-lg bg-gray-200"></p>
            <p className="w-40 h-40 rounded-lg bg-gray-200 mx-2"></p>
            <p className="w-40 h-40 rounded-lg bg-gray-200"></p>
          </div>
        </aside>
        <article className="my-10 lg:w-1/2 lg:px-6">
          <h3 className="h-4 w-[200px] bg-gray-200 rounded-lg my-3"></h3>
          <p className="h-6  bg-gray-200 rounded-lg my-3"></p>
          <p className="h-6  bg-gray-200 rounded-lg my-3"></p>
          <p className="h-6  bg-gray-200 rounded-lg my-3"></p>
          <p className="h-10 bg-gray-200 rounded-full my-6 w-[200px]"></p>
        </article>
      </section>
    </main>
  );
};

export default Index;
