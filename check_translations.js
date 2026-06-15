const fs = require('fs');
const path = require('path');
const p = path.resolve('.');
const htmlFiles = fs.readdirSync(p).filter(f => f.endsWith('.html'));
const keys = new Set();
const placeholders = new Set();
for (const file of htmlFiles) {
  const text = fs.readFileSync(path.join(p, file), 'utf8');
  const re = /data-i18n="([^"]+)"/g;
  let m;
  while ((m = re.exec(text)) !== null) keys.add(m[1]);
  const re2 = /data-i18n-placeholder="([^"]+)"/g;
  while ((m = re2.exec(text)) !== null) placeholders.add(m[1]);
}
const js = fs.readFileSync(path.join(p, 'index.js'), 'utf8');
const m = js.match(/const translations = \{([\s\S]*?)\};\s*const getSavedLanguage/);
if (!m) {
  console.error('no translations match');
  process.exit(1);
}
let obj = '{' + m[1] + '}';
obj = obj.replace(/([\{,\s])([a-zA-Z0-9_]+)\s*:/g, '$1"$2":');
obj = obj.replace(/'/g, '"');
obj = obj.replace(/,\s*([}\]])/g, '$1');
const data = JSON.parse(obj);
const all = new Set();
function rec(o, prefix='') {
  Object.entries(o).forEach(([k,v]) => {
    const path = prefix + k;
    if (v && typeof v === 'object') rec(v, path + '.'); else all.add(path);
  });
}
rec(data.en);
rec(data.hi);
const missing = [...new Set([...keys, ...placeholders])].filter(k => !all.has(k));
console.log('HTML i18n count', keys.size);
console.log('HTML placeholder count', placeholders.size);
console.log('missing', missing.length);
missing.forEach(k => console.log(k));
