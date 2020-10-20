/*
 *  Namespace export
 */
const helloWorld = require('cjs-namespace')
if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Named exports
 */
const { helloWorld: namedHelloWorld } = require('cjs-namespace')
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
//   },
//   helloWorld: <ref *1> [Function: helloWorld] {
//     helloWorld: [Circular *1]
//   }
// }
// however we can still use its default and named export
import('cjs-namespace')
  .then(helloWorld => {
    const { default: defaultHelloWorld, helloWorld: namedHelloWorld } = helloWorld
    // ESM import adds default export automatically!!
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
