import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
// import { defineConfig, loadEnv } from 'vite'
import { loadEnv } from 'vite'
// import { searchForWorkspaceRoot } from 'vite'

const config = defineConfig({
    plugins: [sveltekit()],
    test: {
        include: ['./**/*.unit.{test,spec}.{js,ts}'],
        env: loadEnv('.env', process.cwd()),
        environment: 'node',
    },
    // Not working: browser build to transpile to
    // build: {
    //     target: ['es2020', 'safari13'],
    // },
    // not working: dev mode browser build to transpile to
    // esbuild: {
    //     target: ['es2018', 'safari13'],
    // },
    server: {
        fs: {
            allow: [
                // ========================================================================
                // needed for vite to resolve file paths outside /src
                './schema',
                './triplit',
                // for all in current dir (above ./src):
                // searchForWorkspaceRoot(process.cwd()),
                // ========================================================================
            ],
        },
    },
})

// debugger
// console.log(config)

export default config
