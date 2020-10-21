/*
 *  Namespace export
 */
import helloWorld from 'cjs-triplet/index.js'
if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Named default export
 */
import { default as DefaultHelloWorld } from 'cjs-triplet/index.js'
if (DefaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Named exports
 */
// Till the v14.12 the error was
// import { helloWorld as namedHelloWorld } from 'cjs-triplet'
//          ^^^^^^^
// SyntaxError: The requested module 'cjs-triplet' is expected to be of type CommonJS, which does not support named exports. CommonJS modules can be imported by importing the default export.
// For example:
// import pkg from 'cjs-triplet';
// const { helloWorld: namedHelloWorld } = pkg;

// After the version v14.13 named imports are working just out of the box
import { helloWorld as namedHelloWorld } from 'cjs-namespace/index.js'
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
import('cjs-triplet/index.js')
  .then(({ default: defaultHelloWorld }) => {
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
