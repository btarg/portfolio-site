import adapter from '@sveltejs/adapter-static';

const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
            precompress: true
        }),
        alias: {
            $components: './src/lib/components',
            $data: './src/lib/data'
        }
    }
};

export default config;
