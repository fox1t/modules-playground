/*
 * Namespace
 */
import helloWorld from 'ts-namespace'
if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
if (helloWorld.default() !== 'Hello World') throw new Error('Oh no!')
if (helloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Namespace end
 */
/*
 * ImportStar
 */
import * as helloWorldStar from 'ts-namespace'
// This expression is not callable.
//   Type '{ default: { (): string; helloWorld: any; default: any; }; helloWorld: any; }' has no call signatures.ts(2349)
// if (helloWorldStar() !== 'Hello World') throw new Error('Oh no!')
if (helloWorldStar.default() !== 'Hello World') throw new Error('Oh no!')
if (helloWorldStar.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * ImportStar end
 */

/*
 * ImportRequire
 */
import helloWorldNamespace = require('ts-namespace')
if (helloWorldNamespace() !== 'Hello World') throw new Error('Oh no!')
if (helloWorldNamespace.default() !== 'Hello World') throw new Error('Oh no!')
if (helloWorldNamespace.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * ImportRequire end
 */

/*
 * Named default
 */
import { default as DefaultHelloWorld } from 'ts-namespace'
if (DefaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
if (DefaultHelloWorld.default() !== 'Hello World') throw new Error('Oh no!')
if (DefaultHelloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Named default end
 */

/*
 * Named
 */
import { helloWorld as namedHelloWorld } from 'ts-namespace'
if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Name end
 */

/*
 *  Dynamic import
 */
import('ts-namespace')
  .then(helloWorld => {
    const { helloWorld: namedHelloWorld, default: defaultHelloWorld } = helloWorld
    // This expression is not callable.
    //   Type '{ default: { (): string; helloWorld: any; default: any; }; helloWorld: any; }' has no call signatures.ts(2349)
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
