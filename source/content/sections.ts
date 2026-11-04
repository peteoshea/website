import { Section } from 'types/section';

// Navigation order. A Section's posts live in source/content/<slug>/.
export const sections: Section[] = [
  {
    slug: 'ramblings',
    name: 'Ramblings',
    description: 'Thoughts, opinions and whatever else is on my mind.',
    image: '/images/section-ramblings.svg'
  },
  {
    slug: 'systems',
    name: 'Systems',
    description: 'How I build and run things: software, tooling and the setups behind them.',
    image: '/images/section-systems.svg'
  },
  {
    slug: 'personal',
    name: 'Personal',
    description: 'Life outside the keyboard.',
    image: '/images/section-personal.svg'
  }
];

export default sections;
