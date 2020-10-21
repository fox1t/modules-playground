/*
 *  Namespace export
 */
import helloWorld from 'cjs-namespace/index.js'
if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Named default export
 */
// even if we never exported any default prop it is still importable as default export!
// however
// console.log(typeof helloWorld.default === typeof defaultHelloWorld) => false since helloWorld.default === undefined
import { default as defaultHelloWorld } from 'ts-namespace/build/index.js'
if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Named exports
 */
// Node.js currently dont' support named exports in ESM context.
// Till the v14.12 the error was
// import { helloWorld as namedHelloWorld } from 'cjs-namespace'
//          ^^^^^^^
// SyntaxError: The requested module 'cjs-namespace' is expected to be of type CommonJS, which does not support named exports. CommonJS modules can be imported by importing the default export.
// For example:
// import pkg from 'cjs-namespace';
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
//     helloWorld: [Circular *1]
//   },
//   helloWorld: <ref *1> [Function: helloWorld] {
//     helloWorld: [Circular *1]
//   }
// }
// however we can still use its default and named export
import('cjs-namespace/index.js')
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
