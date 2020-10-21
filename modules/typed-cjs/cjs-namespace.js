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
// however we can still use its named export. `default` isn't usable because of TS. Bug??
import('cjs-namespace')
  .then(helloWorld => {
    const { helloWorld: namedHelloWorld } = helloWorld
    if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
    // typescrpt doesn't know that `import()` adds `default` property
    // const { default: defaultHelloWorld } = helloWorld
    // if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
/*
 *  end
 */
