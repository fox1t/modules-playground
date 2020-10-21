/*
 *  Namespace export
 */

// const helloWorld = require('cjs-triplet')
// helloWorld isn't callable because the triplet typings doesn't have `export =` namespace
// if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
// `.default` has to be used, same as it was a `ts` type of package
const helloWorld = require('cjs-triplet').default
if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Named default export
 */
const { default: DefaultHelloWorld } = require('cjs-triplet')
if (DefaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Named exports
 */
const { helloWorld: namedHelloWorld } = require('cjs-triplet')
if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Dynamic import
 */
// dynamic namespace import is not callable because it is seen as module that contains both props
// [Module] {
//   default: <ref *1> [Function: helloWorld] {
//     default: [Circular *1],
//     helloWorld: [Circular *1]
//   },
//   helloWorld: <ref *1> [Function: helloWorld] {
//     default: [Circular *1],
//     helloWorld: [Circular *1]
//   }
// }
// however we can still use its default and named export
import('cjs-triplet')
  .then(helloWorld => {
    const { default: defaultHelloWorld, helloWorld: namedHelloWorld } = helloWorld
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
