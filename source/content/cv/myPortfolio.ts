import Project from 'types/project';

export const thisWebsite: Project = {
  description:
    'Personal website created with Next.js. Written in TypesScript using TailwindCSS. Jest helped achieve 100% code coverage. Automatic type checking and linting with Husky, Prettier and ESLint. GitHub actions to automatically apply dependency updates and to ensure all tests pass before allowing merge of PR.',
  image: '/peteoshea.co.uk.png',
  name: 'Source for this website',
  url: 'https://github.com/peteoshea/website/'
};
export const saransurf: Project = {
  description:
    'Simple E-commerce website created from scratch with Next.js. Makes use of Crystallize GraphQL API to place orders and update inventory.',
  image: '/saransurf.co.uk.png',
  name: 'Saransurf',
  url: 'https://saransurf.co.uk/'
};
export const skipad: Project = {
  description: 'iPhone app written in Objective C. Unfortunately no longer available.',
  image: '/SkiPad_iPhone_4_Detail.png',
  name: 'SkiPad iPhone App',
  url: 'https://youtu.be/BnXpRpjBIzE'
};

const myPortfolio: Project[] = [thisWebsite, skipad];

export default myPortfolio;
