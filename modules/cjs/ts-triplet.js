/*
 *  Namespace export
 */
const helloWorld = require('ts-triplet')
if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Named default export
 */
const { default: defaultHelloWorld } = require('ts-triplet')
if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Named exports
 */
const { helloWorld: namedHelloWorld } = require('ts-triplet')
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
//     helloWorld: [Circular *1],
//     default: [Circular *1]
//   }
// }
// however we can still use its default export
import('ts-triplet')
  .then(({ default: defaultHelloWorld }) => {
    const { helloWorld: namedHelloWorld } = defaultHelloWorld
    if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
    if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
