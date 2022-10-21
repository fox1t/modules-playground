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
if (helloWorldStar() !== 'Hello World') throw new Error('Oh no!')
if (helloWorldStar.default() !== 'Hello World') throw new Error('Oh no!')
if (helloWorldStar.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * ImportStar end
 */

/*
 * ImportRequire
 */
import HelloWorldNamespace = require('ts-namespace')
if (HelloWorldNamespace() !== 'Hello World') throw new Error('Oh no!')
if (HelloWorldNamespace.default() !== 'Hello World') throw new Error('Oh no!')
if (HelloWorldNamespace.helloWorld() !== 'Hello World') throw new Error('Oh no!')
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
 * Named end
 */

/*
 * Dynamic import
 */
import('ts-namespace')
  .then(helloWorld => {
    const { helloWorld: namedHelloWorld, default: defaultHelloWorld } = helloWorld
    if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
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
