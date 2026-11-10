import myPortfolio, { skipad, thisWebsite } from 'content/cv/myPortfolio';

describe('myPortfolio', () => {
  test('this website description is set', () => {
    expect(thisWebsite.description).toBe(
      'Personal website built with Next.js, TypeScript and Tailwind CSS. Vitest enforces 100% code coverage, with Husky, Prettier and ESLint handling linting and formatting. GitHub Actions apply dependency updates automatically and ensures all tests pass before a PR can be merged.'
    );
  });

  test('this website image is set', () => {
    expect(thisWebsite.image).toEqual({
      src: '/images/peteoshea-co-uk.png',
      width: 1280,
      height: 628
    });
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

  test('skipad description is set', () => {
    expect(skipad.description).toBe(
      'iPhone app for finding suitable ski accommodation, written in Objective-C. No longer available, but this video shows it in use.'
    );
  });

  test('skipad image is set', () => {
    expect(skipad.image).toEqual({
      src: '/images/skipad-iphone.png',
      width: 989,
      height: 1755
    });
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
