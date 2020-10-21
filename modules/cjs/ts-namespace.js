/*
 *  Namespace export
 */
const helloWorld = require('ts-namespace')
if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Named exports
 */
const { helloWorld: namedHelloWorld } = require('ts-namespace')
if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Dynamic import
 */
// dynamic namespace import is not callable because it is seen as module that contains only the default prop
// [Module] {
//   default: <ref *1> [Function: helloWorld] {
//     helloWorld: [Circular *1]
//   }
// }
// however we can still use default. Named import is missing because of how import search for static named export.
// it is not compatible with how TS compiles the code
import('ts-namespace')
  .then(helloWorld => {
    const { default: defaultHelloWorld } = helloWorld
    const { helloWorld: namedHelloWorld } = defaultHelloWorld
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
