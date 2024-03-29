/*
 * Namespace
 */
import helloWorld from 'cjs-namespace'
if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
if (helloWorld.default() !== 'Hello World') throw new Error('Oh no!')
if (helloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Namespace end
 */

/*
 * ImportStar
 */
import * as helloWorldStar from 'cjs-namespace'
// This expression is not callable.
//   Type 'typeof helloWorld' has no call signatures.ts(2349)
// if (helloWorldStar() !== 'Hello World') throw new Error('Oh no!')

if (helloWorldStar.default() !== 'Hello World') throw new Error('Oh no!')
if (helloWorldStar.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * ImportStar end
 */

/*
 * ImportRequire
 */
import HelloWorldNamespace = require('cjs-namespace')
if (HelloWorldNamespace() !== 'Hello World') throw new Error('Oh no!')
if (HelloWorldNamespace.default() !== 'Hello World') throw new Error('Oh no!')
if (HelloWorldNamespace.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * ImportRequire end
 */

/*
 * Named default
 */
import { default as DefaultHelloWorld } from 'cjs-namespace'
if (DefaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
if (DefaultHelloWorld.default() !== 'Hello World') throw new Error('Oh no!')
if (DefaultHelloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Named default end
 */

/*
 * Named
 */
import { helloWorld as namedHelloWorld } from 'cjs-namespace'
if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Named end
 */

/*
 * Dynamic import
 */
// imported helloWorld is an object and therefore is not callable even if TS thinks. This is a bug in TS.
// {
//   helloWorld: [Getter],
//   default: <ref *1> [Function: helloWorld] {
//     helloWorld: [Circular *1],
//     default: [Circular *1]
//   }
// }
import('cjs-namespace')
  .then(helloWorld => {
    const { helloWorld: namedHelloWorld, default: defaultHelloWorld } = helloWorld
    // This expression is not callable in Node.js even if TS thinks it is a function. helloWorld: () => string
    // if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
    if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
    if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
/*
 * Dynamic import end
 */
