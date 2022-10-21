/*
 * Namespace
 */
import helloWorld from 'ts'
// This expression is not callable.
//   Type 'typeof import("/Users/maksim/Projects/experiments/modules-playground/modules/node_modules/ts/build/index")' has no call signatures.ts(2349)
// if (helloWorld() !== 'Hello World') throw new Error('Oh no!')

if (helloWorld.default() !== 'Hello World') throw new Error('Oh no!')
if (helloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Namespace end
 */

/*
 * ImportStar
 */
import * as HelloWorldStar from 'ts'
// This expression is not callable.
//   Type 'typeof import("/Users/maksim/Projects/experiments/modules-playground/modules/node_modules/ts/build/index")' has no call signatures.ts(2349)
// if (HelloWorldStar() !== 'Hello World') throw new Error('Oh no!')

// This expression is not callable.
//   Type 'typeof import("/Users/maksim/Projects/experiments/modules-playground/modules/node_modules/ts/build/index")' has no call signatures.ts(2349)
// if (HelloWorldStar.default() !== 'Hello World') throw new Error('Oh no!')
if (HelloWorldStar.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * ImportStar end
 */

/*
 * ImportRequire
 */
import HelloWorldNamespace = require('ts')
// This expression is not callable.
//   Type 'typeof import("/Users/maksim/Projects/experiments/modules-playground/modules/node_modules/ts/build/index")' has no call signatures.ts(2349)
// if (HelloWorldNamespace() !== 'Hello World') throw new Error('Oh no!')
if (HelloWorldNamespace.default() !== 'Hello World') throw new Error('Oh no!')
if (HelloWorldNamespace.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * ImportRequire end
 */

/*
 * Named default
 */
import { default as DefaultHelloWorld } from 'ts'
// This expression is not callable.
//   Type 'typeof import("/Users/maksim/Projects/experiments/modules-playground/modules/node_modules/ts/build/index")' has no call signatures.ts(2349)
// if (DefaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')

if (DefaultHelloWorld.default() !== 'Hello World') throw new Error('Oh no!')
if (DefaultHelloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Named default end
 */

/*
 * Named
 */
import { helloWorld as namedHelloWorld } from 'ts'
if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Named end
 */

/*
 *  Dynamic import
 */
// helloWorld is a plain object
// {
//   default: typeof helloWorld;
//   helloWorld: () => "Hello World";
// }
import('ts')
  .then(helloWorld => {
    const { default: defaultHelloWorld, helloWorld: namedHelloWorld } = helloWorld
    // This expression is not callable.
    //   Type '{ default: typeof import("/Users/maksim/Projects/experiments/modules-playground/modules/node_modules/ts/build/index"); helloWorld: () => "Hello World"; }' has no call signatures.ts(2349)
    // if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
    // This expression is not callable.
    //   Type 'typeof import("/Users/maksim/Projects/experiments/modules-playground/modules/node_modules/ts/build/index")' has no call signatures.ts(2349)
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
