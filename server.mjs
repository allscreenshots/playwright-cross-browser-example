import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
const page = await readFile(new URL('./fixture.html', import.meta.url));
createServer((req, res) => {
  if (req.url?.split('?')[0] !== '/') { res.writeHead(404).end(); return; }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(page);
}).listen(4199, '127.0.0.1', () => console.log('Fixture: http://127.0.0.1:4199'));
