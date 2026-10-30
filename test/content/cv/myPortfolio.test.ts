import myPortfolio, { saransurf, skipad, thisWebsite } from 'content/cv/myPortfolio';

describe('myPortfolio', () => {
  test('this website description is set', () => {
    expect(thisWebsite.description).toBe(
      'Personal website created with Next.js. Written in TypesScript using TailwindCSS. Jest helped achieve 100% code coverage. Automatic type checking and linting with Husky, Prettier and ESLint. GitHub actions to automatically apply dependency updates and to ensure all tests pass before allowing merge of PR.'
    );
  });

  test('this website image is set', () => {
    expect(thisWebsite.image).toEqual({ src: '/peteoshea.co.uk.png', width: 1534, height: 1152 });
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
    expect(saransurf.image).toEqual({ src: '/saransurf.co.uk.png', width: 1531, height: 1028 });
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
    expect(skipad.image).toEqual({ src: '/SkiPad_iPhone_4_Detail.png', width: 989, height: 1755 });
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
