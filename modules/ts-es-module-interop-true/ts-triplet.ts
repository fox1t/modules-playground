/*
 * Namespace
 */
import helloWorld from 'ts-triplet'
if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
// Property 'default' does not exist on type '() => string'.ts(2339)
// if (helloWorld.default() !== 'Hello World') throw new Error('Oh no!')
// Property 'helloWorld' does not exist on type '() => string'.ts(2339)
// if (helloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Namespace end
 */

/*
 * ImportStar
 */
import * as HelloWorldStar from 'ts-triplet'
// This expression is not callable.
//   Type 'typeof import("/Users/maksim/Projects/experiments/modules-playground/modules/node_modules/ts-triplet/build/index")' has no call signatures.ts(2349)
// if (HelloWorldStar() !== 'Hello World') throw new Error('Oh no!')
if (HelloWorldStar.default() !== 'Hello World') throw new Error('Oh no!')
if (HelloWorldStar.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * ImportStar end
 */

/*
 * ImportRequire
 */
import HelloWorldNamespace = require('ts-triplet')
// This expression is not callable.
//   Type 'typeof import("/Users/maksim/Projects/experiments/modules-playground/modules/node_modules/ts-triplet/build/index")' has no call signatures.ts(2349)
// if (HelloWorldNamespace() !== 'Hello World') throw new Error('Oh no!')
if (HelloWorldNamespace.default() !== 'Hello World') throw new Error('Oh no!')
if (HelloWorldNamespace.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * ImportRequire end
 */

/*
 * Named default
 */
import { default as DefaultHelloWorld } from 'ts-triplet'
if (DefaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
// Property 'default' does not exist on type '() => string'.ts(2339)
// if (DefaultHelloWorld.default() !== 'Hello World') throw new Error('Oh no!')
// Property 'helloWorld' does not exist on type '() => string'.ts(2339)
// if (DefaultHelloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Named default end
 */

/*
 * Named
 */
import { helloWorld as namedHelloWorld } from 'ts-triplet'
if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Named end
 */

/*
 *  Dynamic import
 */
import('ts-triplet')
  .then(helloWorld => {
    const { helloWorld: namedHelloWorld, default: defaultHelloWorld } = helloWorld
    // not callable! Bug?
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
