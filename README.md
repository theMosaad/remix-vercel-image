# Vercel's Image Optimization in Remix

This is a port of [Vercel's Image Optimization Example](https://github.com/vercel/examples/tree/main/build-output-api/image-optimization) using [Remix](https://github.com/remix-run/remix).

## Demo
https://remix-vercel-image.vercel.app


## Modifications
This is a fresh installation via `npx create-remix@latest` with the additional `images` object passed to `remix.config.js`
```js
// remix.config.js
module.exports = {
    // ...
    images: {
        sizes: [256, 384, 600, 1000],
        domains: [],
        minimumCacheTTL: 60,
        formats: ['image/webp', 'image/avif'],
    },
    // ...
};
```

### In progress
This is built locally using a patched version of Vercel's cli.

You can track the progress in https://github.com/vercel/vercel/pull/8217.
