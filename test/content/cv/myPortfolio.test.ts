import { describe, expect, test } from 'vitest';

import myPortfolio, {
  saransurf,
  skipad,
  thisWebsite
} from '../../../source/content/cv/myPortfolio';

describe('myPortfolio', () => {
  test('this website description is set', () => {
    expect(thisWebsite.description).toBe(
      'Personal website created with Next.js. Written in TypesScript using TailwindCSS. Jest helped achieve 100% code coverage. Automatic type checking and linting with Husky, Prettier and ESLint. GitHub actions to automatically apply dependency updates and to ensure all tests pass before allowing merge of PR.'
    );
  });

  test('this website image is set', () => {
    expect(thisWebsite.image).toBe('/peteoshea.co.uk.png');
  });

  test('this website name is set', () => {
    expect(thisWebsite.name).toBe('Source for this website');
  });

  test('this website url is set', () => {
    expect(thisWebsite.url).toBe('https://github.com/peteoshea/website/');
  });

  test('contains this website', () => {
    expect(myPortfolio).toContainEqual(thisWebsite);
  });

  test('saransurf description is set', () => {
    expect(saransurf.description).toBe(
      'Simple E-commerce website created from scratch with Next.js. Makes use of Crystallize GraphQL API to place orders and update inventory.'
    );
  });

  test('saransurf image is set', () => {
    expect(saransurf.image).toBe('/saransurf.co.uk.png');
  });

  test('saransurf name is set', () => {
    expect(saransurf.name).toBe('Saransurf');
  });

  test('saransurf url is set', () => {
    expect(saransurf.url).toBe('https://saransurf.co.uk/');
  });

  test('does not contain saransurf', () => {
    // Waiting for the site to be finished before including it
    expect(myPortfolio).not.toContainEqual(saransurf);
  });

  test('skipad description is set', () => {
    expect(skipad.description).toBe(
      'iPhone app written in Objective C. Unfortunately no longer available.'
    );
  });

  test('skipad image is set', () => {
    expect(skipad.image).toBe('/SkiPad_iPhone_4_Detail.png');
  });

  test('skipad name is set', () => {
    expect(skipad.name).toBe('SkiPad iPhone App');
  });

  test('skipad url is set', () => {
    expect(skipad.url).toBe('https://youtu.be/BnXpRpjBIzE');
  });

  test('contains skipad', () => {
    expect(myPortfolio).toContainEqual(skipad);
  });
});
