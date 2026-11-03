import {build} from 'vite';import {cp,mkdir,readFile,writeFile} from 'node:fs/promises';
await build();await mkdir('dist/src/assets',{recursive:true});await cp('src/assets','dist/src/assets',{recursive:true});
const html=await readFile('dist/index.html','utf8');
for(let i=1;i<=10;i++){const dir=`dist/chapter/${String(i).padStart(2,'0')}`;await mkdir(dir,{recursive:true});await writeFile(`${dir}/index.html`,html);}
await writeFile('dist/404.html',html);await writeFile('dist/.nojekyll','');
