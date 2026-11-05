import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicDir = path.join(root, 'public');

const filesIn = (dir: string): string[] =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? filesIn(full) : [full];
  });

// Absolute site paths to pictures, e.g. '/images/github.svg' or '(/photos/x.jpg)'; not URLs.
const assetPath = /(?<![\w:/.])(\/[\w./-]+\.(?:svg|png|jpe?g|gif|webp|avif|ico))/gi;

// Compared exactly, because Windows and macOS ignore case but the host serving the site doesn't.
const publicFiles = new Set(
  filesIn(publicDir).map((file) => `/${path.relative(publicDir, file).split(path.sep).join('/')}`)
);

describe('public assets', () => {
  test('the root holds only the favicons and the images and photos folders', () => {
    expect(fs.readdirSync(publicDir).sort()).toEqual([
      'favicon-16x16.png',
      'favicon-32x32.png',
      'favicon-96x96.png',
      'images',
      'photos'
    ]);
  });

  test('images is a flat folder of lowercase hyphenated SVGs and PNGs', () => {
    for (const entry of fs.readdirSync(path.join(publicDir, 'images'))) {
      expect(entry).toMatch(/^[a-z0-9-]+\.(svg|png)$/);
    }
  });

  test('photos is a flat folder of lowercase hyphenated JPEGs', () => {
    for (const entry of fs.readdirSync(path.join(publicDir, 'photos'))) {
      expect(entry).toMatch(/^[a-z0-9-]+\.jpg$/);
    }
  });

  test('every picture the site refers to exists', () => {
    const sources = ['source', 'pages']
      .flatMap((dir) => filesIn(path.join(root, dir)))
      .filter((file) => /\.(tsx?|md)$/.test(file));
    const missing = sources.flatMap((file) =>
      [...fs.readFileSync(file, 'utf8').matchAll(assetPath)]
        .map(([, asset]) => asset)
        .filter((asset) => !publicFiles.has(asset))
        .map((asset) => `${path.relative(root, file)}: ${asset}`)
    );
    expect(missing).toEqual([]);
  });
});
