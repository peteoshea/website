import Project from 'types/project';

export const thisWebsite: Project = {
  description:
    'Personal website built with Next.js, TypeScript and Tailwind CSS. Vitest enforces 100% code coverage, with Husky, Prettier and ESLint handling linting and formatting. GitHub Actions apply dependency updates automatically and ensure all tests pass before a PR can be merged.',
  image: { src: '/images/peteoshea-co-uk.png', width: 1280, height: 628 },
  name: 'Source for this website',
  url: 'https://github.com/peteoshea/website/'
};
export const skipad: Project = {
  description:
    'iPhone app for finding suitable ski accommodation, written in Objective-C. No longer available, but this video shows it in use.',
  image: { src: '/images/skipad-iphone.png', width: 989, height: 1755 },
  name: 'SkiPad iPhone App',
  url: 'https://youtu.be/BnXpRpjBIzE'
};

const myPortfolio: Project[] = [thisWebsite, skipad];

export default myPortfolio;
