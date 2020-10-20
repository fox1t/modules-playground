/*
 *  Namespace export
 */
// This module is declared with using 'export =', and can only be used as a default import when using the 'esModuleInterop: true'
// import helloWorld from 'cjs-namespace'
import * as helloWorldStar from 'cjs-namespace'
import helloWorld = require('cjs-namespace')
if (helloWorldStar() !== 'Hello World') throw new Error('Oh no!')
if (helloWorldStar.helloWorld() !== 'Hello World') throw new Error('Oh no!')
if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
if (helloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Named exports
 */
import { helloWorld as namedHelloWorld } from 'cjs-namespace'
if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Dynamic import
 */
// in TS dynamic namespace import is callable (in ESM IT IS NOT CALLABLE)
// because it has the same shape as `import * as helloWorldStar from 'cjs-namespace'` and `import helloWorld = require('cjs-namespace')`
//[Function: helloWorld] {
//   helloWorld: [Circular *1]
//}

import('cjs-namespace')
  .then(helloWorld => {
    const { helloWorld: namedHelloWorld } = helloWorld
    if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
    if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
/*
 *  end
 */
