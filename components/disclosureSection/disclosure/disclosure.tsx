import React from 'react';
import { Disclosure } from '@headlessui/react';
import ChevronUpIcon from '@/utils/chevronUp/chevronUp';
import Closure from './closure';

const DisclosureComponent = () => {
  let disclosures = [
    {
      text: 'Do you offer technical support?',
      description:
        'No, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, inventore!.',
    },
    {
      text: 'Do you offer technical support?',
      description:
        'No, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, inventore!.',
    },
    {
      text: 'Do you offer technical support?',
      description:
        'No, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, inventore!.',
    },
  ];
  return (
    <div className="my-4">
      <div className="w-full">
        {disclosures.map((closure, id) => (
          <Closure key={id} closure={closure} />
        ))}
      </div>
    </div>
  );
};

export default DisclosureComponent;
