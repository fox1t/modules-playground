# Intro

This repo is part of a foregoing discussion about the best TS exported types and JS export objects for the Fastify ecosystem. The document that originates it can be found [here](https://gist.github.com/fox1t/314e5fe9784ff7bb695b4603b97d978d).

The repo demonstrates how fastify version 3.2.0 can be imported in 3 different contexts (4 if we consider TS as two distinct, because of esModuleInterop) without any runtime issues or TS compile problems.

This repository also implicitly demonstrates how current fastify TS types and JS exported-object are probably the best options for all fastify packages.

There are 4 main folders:

- CJS: this folder contains `module.exports/require` workflow
- ESM: this folder contains `export/import` in JS world (node v14.7.0 is used in order to have ESM native support)
- TS: contains two different configurations for [esModuleInterop](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#support-for-import-d-from-cjs-from-commonjs-modules-with---esmoduleinterop)
  - es-module-interop-false
  - es-module-interop-true

## Note

The project deliberately "just" imports and calls fastify (instead of using test suites/tsd or other helpers) function in order to ensure that it is properly working in the real scenarios.

## Note 2

The projects includes also TS compiled code, in order to be useful even without being cloned.

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

The last command will run all of the scripts that point to different contexts: a total of 17 fastify servers will be started and the output should be something similar to this.

```
[ESM] namespace import is running.
[ESM] `import("fastify");` dynamic namespace import is running (using `.default` prop).
[CJS] named require is running.
[CJS] default property require is running.
[CJS] module.exports is running.
[TS - esModuleInterop: false] `import { fastify } from "fastify";` is running. (fastify named import)
[TS - esModuleInterop: true] `import { fastify } from "fastify";` is running. (fastify named import)
[TS - esModuleInterop: true] `import Fastify from 'fastify';` import is running. (namespace `.default` prop)
[TS - esModuleInterop: false] `import Fastify from 'fastify';` import is running. (namespace `.default` prop)
[TS - esModuleInterop: true] `import * as FastifyNamespace from "fastify";` star import namespace named import is running (using `.fastify` prop).
[TS - esModuleInterop: false] `import * as FastifyNamespace from "fastify";` star import namespace named import is running (using `.fastify` prop).
[TS - esModuleInterop: false] `import * as FastifyNamespace from "fastify";` star import namespace is running (using `.default` prop).
[TS - esModuleInterop: true] `import * as FastifyNamespace from "fastify";` star import namespace is running (using `.default` prop).
[TS - esModuleInterop: false] `import("fastify");` dynamic namespace import is running (using `.fastify` prop).
[TS - esModuleInterop: true] `import("fastify");` dynamic namespace import is running (using `.fastify` prop).
[TS - esModuleInterop: true] `import("fastify");` dynamic namespace import is running (using `.default` prop).
[TS - esModuleInterop: false] `import("fastify");` dynamic namespace import is running (using `.default` prop).
```

At the beginning of each line, between `[]` there is the context that is running the server.

### Conclusions

We can see that not every context is able to run all of the exports we are providing. However, it is important to note that every context has everything that is needed in order to be used without being weird to its habitual users.

Exporting this JS code

```js
fastify.fastify = fastify;
fastify.default = fastify;
module.exports = fastify;
```

and this types

```ts
export { fastify };
export default fastify;

// and all other named exported types
```

makes Fastify immune to esModuleInterop configuration, and makes all of our users happier!
