import myPortfolio, { loyalty, saransurf, skipad, thisWebsite } from 'content/cv/myPortfolio';

describe('myPortfolio', () => {
  test('this website description is set', () => {
    expect(thisWebsite.description).toBe(
      'Personal website created with Next.js. Written in TypesScript using TailwindCSS. Jest helped achieve 100% test coverage. Automatic type checking and linting with Husky, Prettier and ESLint. GitHub actions to automatically apply dependency updates and to ensure all tests pass before allowing merge of PR.'
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

  test('contains saransurf', () => {
    expect(myPortfolio).toContainEqual(saransurf);
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

  test('loyalty description is set', () => {
    expect(loyalty.description).toBe(
      'I created the initial loyalty system for Polaris Elements solo, although it has been worked on by others since then. It is written in PHP using the CodeIgniter framework. There is a Bootstrap UI and a REST API for the backend connecting to a MySQL database.'
    );
  });

  test('loyalty name is set', () => {
    expect(loyalty.name).toBe('Polaris Loyalty');
  });

  test('loyalty url is set', () => {
    expect(loyalty.url).toBe('https://polaris-elements.co.uk/solutions/polaris-infinity/');
  });

  test('contains loyalty', () => {
    expect(myPortfolio).toContainEqual(loyalty);
  });
});
