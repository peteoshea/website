import Project from 'types/project';

export const thisWebsite: Project = {
  description:
    'Personal website created with Next.js. Written in TypeScript using TailwindCSS. Vitest helped achieve 100% code coverage. Automatic type checking and linting with Husky, Prettier and ESLint. GitHub actions to automatically apply dependency updates and to ensure all tests pass before allowing merge of PR.',
  image: { src: '/images/peteoshea-co-uk.png', width: 1280, height: 628 },
  name: 'Source for this website',
  url: 'https://github.com/peteoshea/website/'
};
export const saransurf: Project = {
  description:
    'Simple E-commerce website created from scratch with Next.js. Makes use of Crystallize GraphQL API to place orders and update inventory.',
  image: { src: '/images/saransurf-co-uk.png', width: 1531, height: 1028 },
  name: 'Saransurf',
  url: 'https://saransurf.co.uk/'
};
export const skipad: Project = {
  description: 'iPhone app written in Objective C. Unfortunately no longer available.',
  image: { src: '/images/skipad-iphone.png', width: 989, height: 1755 },
  name: 'SkiPad iPhone App',
  url: 'https://youtu.be/BnXpRpjBIzE'
};

const myPortfolio: Project[] = [thisWebsite, skipad];

export default myPortfolio;
