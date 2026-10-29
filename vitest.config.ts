import path from 'node:path';
import { defineConfig } from 'vitest/config';

const sourceDir = path.resolve(process.cwd(), 'source');

export default defineConfig({
  esbuild: { jsx: 'automatic' },
  resolve: {
    alias: {
      // Source modules are importable by bare name. This mirrors the previous
      // Jest "moduleDirectories: ['node_modules', 'source']" setup.
      components: path.resolve(sourceDir, 'components'),
      content: path.resolve(sourceDir, 'content'),
      types: path.resolve(sourceDir, 'types')
      // app still imports; map it so resolution succeeds. The stylesheet itself
      // is inert in tests because CSS imports are not evaluated.
    }
  },
  css: {
    // Components are asserted on class names, not on compiled CSS, so the app's
    // PostCSS/Tailwind pipeline is deliberately not run: it is slow and couples
    // the suite to the stylesheet toolchain.
    postcss: { plugins: [] }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['test/**/*.{test,spec}.{ts,tsx,js,jsx}'],
    exclude: ['**/node_modules/**', '**/.next/**', '**/out/**', '**/dist/**'],
    css: {
      // Keep the class names written in the .module.css files.
      modules: {
        classNameStrategy: 'non-scoped'
      }
    },
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage',
      include: ['pages/**/*.{js,jsx,ts,tsx}', 'source/**/*.{js,jsx,ts,tsx}']
    }
  }
});
