# Intro

This repo is part of a previous discussion about the best TS exported types and JS export objects for the Fastify ecosystem. The document that originates it can be found [here](https://gist.github.com/fox1t/314e5fe9784ff7bb695b4603b97d978d).

The repo demonstrates how different dependency packages (`modules/node_modules`) can be imported in different contexts (other folders in the `modules` folder) without any runtime issues or TS compile problems.
## Note
The project also includes TS-compiled code to be useful even without being cloned.

# Usage

## Prerequisites

- Node >= 13.2.0 for native ESM support

## Running the project

```
$ git clone git@github.com:fox1t/modules-playground.git
$ cd modules-playground
$ npm i
$ npm run all
```

The last command will run all of the scripts that point to different contexts. If no compile or runtime errors are thrown, everything works as expected.

Looking at the code, it is possible to find commented lines with errors above them. Those lines generate an error (compile or runtime) in their used context.

Opening specific runtime context, it is easy to check which packages are the most compatible with that particular context.

### Conclusions

We can see that not every context can run all of the exports. The most compatible package type is the so-called `cjs-namespace` that combines the infamous triplet with a typescript namespace (check out `modules/node_modules/cjs-namespace`).

Exporting this JS code

```js
fastify.fastify = fastify;
fastify.default = fastify;
module.exports = fastify;
```

and this types

```ts
declare namespace fastify {
  export { fastify };
  export { fastify as default };
}

declare function fastify(): string

export = fastify;
```

This specific export makes Fastify immune to esModuleInterop configuration and allows imports in every other context. The TS newly added `NodeNext` too!
