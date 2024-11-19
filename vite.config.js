import { ViteFaviconsPlugin } from 'vite-plugin-favicon2';
import ViteRestart from 'vite-plugin-restart';
import copy from 'rollup-plugin-copy';

const path = require('path')
export default ({ command }) => ({
    base: command === 'serve' ? '' : '/dist/',
    publicDir: 'src/public',
    build: {
        outDir: 'web/dist/',
        emptyOutDir: true,
        sourcemap: true,
        manifest: 'manifest.json',
        minify: 'esbuild',
        rollupOptions: {
            input: {
                index: './src/index.js',
            },
            output: {
                dir: 'web/dist/',
            }
        },
    },
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    server: {
        fs: {
            strict: false
        },
        host: '0.0.0.0',
        origin: 'http://localhost:3000',
        port: 3000,
        strictPort: true
    },
    css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true
            }
        }
    },
    plugins: [
        ViteRestart({
            reload: [
                'templates/**/*'
            ]
        }),
        ViteFaviconsPlugin({
            logo: "src/public/images/favicon.svg",
            inject: false,
            outputPath: '../favicons'
        }),
        copy({
            targets: [
                {
                    src: 'src/public/**/*',
                    dest: 'web/dist'
                }
            ]
        })
    ]
});