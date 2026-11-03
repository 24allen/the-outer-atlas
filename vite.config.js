import {defineConfig} from 'vite';
export default defineConfig({base:process.env.PAGES_BASE||'/',server:{host:'127.0.0.1',port:5175},build:{target:'es2022'},publicDir:false});
