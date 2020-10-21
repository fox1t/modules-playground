/*
 *  Namespace export
 */
import helloWorld from 'ts-namespace/build/index.js'
if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Named default export
 */
// even if we never exported any default prop it is still importable as default export!
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
// import { helloWorld as namedHelloWorld } from 'ts-namespace'
//          ^^^^^^^
// SyntaxError: The requested module 'ts-namespace' is expected to be of type CommonJS, which does not support named exports. CommonJS modules can be imported by importing the default export.
// For example:
// import pkg from 'ts-namespace';
// const { helloWorld: namedHelloWorld } = pkg;

// After the version v14.13.1 the error is
// import { helloWorld as namedHelloWorld } from 'ts-namespace'
//          ^^^^^^^^^^
// SyntaxError: Named export 'helloWorld' not found. The requested module 'ts-namespace' is a CommonJS module, which may not support all module.exports as named exports.
// CommonJS modules can always be imported via the default export, for example using:
// import pkg from 'ts-namespace';
// const { helloWorld: namedHelloWorld } = pkg;

// the issue is that ESM can't find
// module.exports = helloWorld
// module.exports.default = helloWorld
// module.exports.helloWorld = helloWorld
// because of TS `export =` syntax

// afeter importing namespace export we can still do
const { helloWorld: namedHelloWorld } = helloWorld
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
// however we can still use its default and named export
import('ts-namespace/build/index.js')
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
