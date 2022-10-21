/*
 * Namespace
 */
import helloWorld from 'cjs-triplet'
// This expression is not callable.
//   Type 'typeof import("/Users/maksim/Projects/experiments/modules-playground/modules/node_modules/cjs-triplet/index")' has no call signatures.ts(2349)
// if (helloWorld() !== 'Hello World') throw new Error('Oh no!')

if (helloWorld.default() !== 'Hello World') throw new Error('Oh no!')
if (helloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Namespace end
 */

/*
 * ImportStar
 */
import * as HelloWorldStar from 'cjs-triplet'
// This expression is not callable.
//   Type 'typeof import("/Users/maksim/Projects/experiments/modules-playground/modules/node_modules/cjs-triplet/index")' has no call signatures.ts(2349)
// if (HelloWorldStar() !== 'Hello World') throw new Error('Oh no!')

// This expression is not callable.
//   Type 'typeof import("/Users/maksim/Projects/experiments/modules-playground/modules/node_modules/cjs-triplet/index")' has no call signatures.ts(2349)
// if (HelloWorldStar.default() !== 'Hello World') throw new Error('Oh no!')
if (HelloWorldStar.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * ImportStar end
 */

/*
 * ImportRequire
 */
import HelloWorldNamespace = require('cjs-triplet')
// This expression is not callable.
//   Type 'typeof import("/Users/maksim/Projects/experiments/modules-playground/modules/node_modules/cjs-triplet/index")' has no call signatures.ts(2349)
// if (HelloWorldNamespace() !== 'Hello World') throw new Error('Oh no!')

if (HelloWorldNamespace.default() !== 'Hello World') throw new Error('Oh no!')
if (HelloWorldNamespace.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * ImportRequire end
 */

/*
 * Named default
 */
import { default as DefaultHelloWorld } from 'cjs-triplet'
// This expression is not callable.
//   Type 'typeof import("/Users/maksim/Projects/experiments/modules-playground/modules/node_modules/cjs-triplet/index")' has no call signatures.ts(2349)
// if (DefaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')

if (DefaultHelloWorld.default() !== 'Hello World') throw new Error('Oh no!')
if (DefaultHelloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Named default end
 */

/*
 * Named
 */
import { helloWorld as namedHelloWorld } from 'cjs-triplet'
if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Named end
 */

/*
 * Dynamic import
 */
// even if helloWorld is a function TS says it is not callable. Bug??
// typescript dynamic import is just a Promise that calls `require()` after the compilation
// <ref *1> [Function: helloWorld] {
//   default: [Circular *1],
//   helloWorld: [Circular *1]
// }
// `import('cjs-triplet')` behavior is not the same as `import helloWorld from 'cjs-triplet'` that searches for the default prop

import('cjs-triplet')
  .then(helloWorld => {
    const { helloWorld: namedHelloWorld, default: defaultHelloWorld } = helloWorld
    // not callable! Bug?
    // This expression is not callable.
    //   Type '{ default: typeof import("/Users/maksim/Projects/experiments/modules-playground/modules/node_modules/cjs-triplet/index"); helloWorld: () => "Hello World"; }' has no call signatures.ts(2349)
    // if (helloWorld() !== 'Hello World') throw new Error('Oh no!')

    // This expression is not callable.
    //   Type 'typeof import("/Users/maksim/Projects/experiments/modules-playground/modules/node_modules/cjs-triplet/index")' has no call signatures.ts(2349)
    // if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')

    if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
/*
 * Dynamic import end
 */
