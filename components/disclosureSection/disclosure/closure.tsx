import ChevronUpIcon from '@/utils/chevronUp/chevronUp';
import { Disclosure } from '@headlessui/react';
import React from 'react';

interface Props {
  closure: { text: string; description: string };
}

const Closure = ({ closure }: Props) => {
  return (
    <Disclosure as="div" className="mb-6 shadow-md rounded-md bg-white">
      {({ open }) => (
        <section>
          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-2 py-4 text-left text-lg text-black focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
            <p className="flex items-center">
              <span className="w-8 h-8 bg-black rounded-full inline-block mr-2"></span>
              <span>{closure.text}</span>
            </p>
            <ChevronUpIcon
              className={`${
                open ? 'rotate-180 transform ' : ''
              } h-5 w-5 text-black transition-all`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="pl-12 py-4 text-gray-500 text-lg">
            {closure.description}
          </Disclosure.Panel>
        </section>
      )}
    </Disclosure>
  );
};

export default Closure;
