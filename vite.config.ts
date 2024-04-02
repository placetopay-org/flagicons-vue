import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const baseConfig = { plugins: [vue(), svgLoader()] };

    if (mode === 'web') {
        return {
            ...baseConfig,
            build: {
                outDir: './web/dist',
            },
        };
    }

    return {
        ...baseConfig,
        build: {
            outDir: './dist',
            lib: {
                entry: resolve(__dirname, 'lib/index.ts'),
                name: 'FlagIconsVue',
            },
        },
    };
});
