/*
 * Namespace
 */
import helloWorld from 'ts'
if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
// Property 'default' does not exist on type '() => "Hello World"'.ts(2339)
// if (helloWorld.default() !== 'Hello World') throw new Error('Oh no!')

// Property 'helloWorld' does not exist on type '() => "Hello World"'.ts(2339)
// if (helloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Namespace end
 */

/*
 * ImportStar
 */
import * as helloWorldStar from 'ts'
// Cannot find name 'HelloWorldStar'. Did you mean 'helloWorldStar'?ts(2552)
// if (HelloWorldStar() !== 'Hello World') throw new Error('Oh no!')
if (helloWorldStar.helloWorld() !== 'Hello World') throw new Error('Oh no!')
if (helloWorldStar.default() !== 'Hello World') throw new Error('Oh no!')
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
import { default as defaultHelloWorld } from 'ts'
if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
// Property 'default' does not exist on type '() => "Hello World"'.ts(2339)
// if (defaultHelloWorld.default() !== 'Hello World') throw new Error('Oh no!')

// Property 'helloWorld' does not exist on type '() => "Hello World"'.ts(2339)
// if (defaultHelloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Named default end
 */

/*
 * Named
 */
// on the other hand helloWorld works when name imported
import { helloWorld as namedHelloWorld } from 'ts'
if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Named end
 */

/*
 *  Dynamic import
 */
import('ts')
  .then(helloWorld => {
    const { default: defaultHelloWorld, helloWorld: namedHelloWorld } = helloWorld
    // This expression is not callable.
    //   Type 'typeof import("/Users/maksim/Projects/experiments/modules-playground/modules/node_modules/ts/build/index")' has no call signatures.ts(2349)
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
