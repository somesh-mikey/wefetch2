import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'dist');
const templatePath = path.resolve(distDir, 'index.html');
const serverEntryPath = path.resolve(distDir, 'server', 'entry-server.js');

const template = await readFile(templatePath, 'utf-8');
const { render } = await import(pathToFileURL(serverEntryPath));

const routes = [
  '/',
  '/services',
  '/score',
  '/about',
  '/pricing',
  '/tools',
  '/blogs',
  '/emission-leakage-meaning-causes-examples-prevention',
  '/contact',
];

for (const route of routes) {
  const { html, head } = await render(route);
  const page = template
    .replace('<!--app-html-->', html)
    .replace('<!--head-tags-->', head || '');

  const filePath = path.resolve(
    distDir,
    route === '/' ? 'index.html' : `${route}/index.html`
  );

  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, page, 'utf-8');
}
