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
// in this case we can't use default property neither since TS doesn't see it!
// also the named export is encapsulated in the default property
// this makes `ts-namespace` UNUSABLE. Bug??
import('ts-namespace')
  .then(helloWorld => {
    // const { default: defaultHelloWorld } = helloWorld
    // const { helloWorld: namedHelloWorld } = defaultHelloWorld
    // if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
    // if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
/*
 *  end
 */
