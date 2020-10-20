/*
 *  Namespace export
 */
import helloWorld from 'cjs-triplet'
import * as HelloWorldStar from 'cjs-triplet'
import HelloWorldNamespace = require('cjs-triplet')

if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
if (HelloWorldNamespace.default() !== 'Hello World') throw new Error('Oh no!')
if (HelloWorldNamespace.helloWorld() !== 'Hello World') throw new Error('Oh no!')
if (HelloWorldStar.default() !== 'Hello World') throw new Error('Oh no!')
if (HelloWorldStar.helloWorld() !== 'Hello World') throw new Error('Oh no!')

/*
 *  end
 */

/*
 *  Named default export
 */
import { default as DefaultHelloWorld } from 'cjs-triplet'
if (DefaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Named exports
 */
import { helloWorld as namedHelloWorld } from 'cjs-triplet'
if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Dynamic import
 */
// even if helloWorld is a function TS says it is not callable. Bug??
// <ref *1> [Function: helloWorld] {
//   default: [Circular *1],
//   helloWorld: [Circular *1]
// }
// `import('cjs-triplet')` behavior is not the same as `import helloWorld from 'cjs-triplet'` that searches for the default prop

import('cjs-triplet')
  .then(helloWorld => {
    const { helloWorld: namedHelloWorld, default: defaultHelloWorld } = helloWorld
    // not callable! Bug?
    //if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
    if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
    if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
/*
 *  end
 */
