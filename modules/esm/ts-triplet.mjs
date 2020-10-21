/*
 *  Namespace export
 */
import helloWorld from 'ts-triplet/index.js'
if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Named default export
 */
import { default as defaultHelloWorld } from 'ts-triplet/index.js'
if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Named exports
 */
// Node.js currently dont' support named exports in ESM context.
// Till the v14.12 the error was
// import { helloWorld as namedHelloWorld } from 'ts-triplet'
//          ^^^^^^^
// SyntaxError: The requested module 'ts-triplet' is expected to be of type CommonJS, which does not support named exports. CommonJS modules can be imported by importing the default export.
// For example:
// import pkg from 'ts-triplet';
// const { helloWorld: namedHelloWorld } = pkg;

// On version v14.13 the error is
// import { helloWorld as namedHelloWorld } from 'ts-triplet/index.js'
//          ^^^^^^^^^^
// SyntaxError: Named export 'helloWorld' not found. The requested module 'ts-triplet/index.js' is a CommonJS module, which may not support all module.exports as named exports.
// CommonJS modules can always be imported via the default export, for example using:

// import pkg from 'ts-triplet/index.js';
// const { helloWorld: namedHelloWorld } = pkg;
// import { helloWorld as namedHelloWorld } from 'ts-triplet/index.js'
// if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
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
import('ts-triplet/index.js')
  .then(({ default: defaultHelloWorld }) => {
    const { helloWorld: namedHelloWorld } = defaultHelloWorld
    if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
    if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
