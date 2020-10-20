/*
 *  Namespace export
 */
// the shape of the namespace import is a plain object that contains two properties
// {
//   helloWorld: [Function: helloWorld],
//   default: [Function: helloWorld]
// }
// namespace is not callable
import helloWorld from 'ts/build/index.js'
if (helloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
if (helloWorld.default() !== 'Hello World') throw new Error('Oh no!')

/*
 *  end
 */

/*
 *  Named exports
 */
// default export is still a plain object containing two properties
// {
//   helloWorld: [Function: helloWorld],
//   default: [Function: helloWorld]
// }
import { default as defaultHelloWorld } from 'ts/build/index.js'
// Is this a bug? On named import defaultHelloWorld becomes an object even if helloWorld.default() was a function
// console.log(
//   'typeof helloWorld.default === typeof defaultHelloWorld',
//   typeof helloWorld.default === typeof defaultHelloWorld,
// ) => false!!!
// because of that issue, defaultHelloWorld is not callable
// if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
if (defaultHelloWorld.default() !== 'Hello World') throw new Error('Oh no!')
if (defaultHelloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')

// on the other hand helloWorld works when name imported
import { helloWorld as namedHelloWorld } from 'ts/build/index.js'
if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Dynamic import
 */
// dynamic namespace import is not callable because it is seen as module that contains all of the props
// this differs from all of the other test case in ESM context
// [Module] {
//   __esModule: true,
//   default: {
//     helloWorld: [Function: helloWorld],
//     default: [Function: helloWorld]
//   },
//   helloWorld: [Function: helloWorld]
// }
// however we can still use its default export that is a non callable plain object
// {
//   helloWorld: [Function: helloWorld],
//   default: [Function: helloWorld]
// }
import('ts/build/index.js')
  .then(helloWorld => {
    // here we have also a named import on top level. It is missing from the other test cases
    const { default: defaultHelloWorld, helloWorld: namedHelloWorld } = helloWorld

    // defaultHelloWorld is not callable
    // if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
    if (defaultHelloWorld.default() !== 'Hello World') throw new Error('Oh no!')
    if (defaultHelloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
    if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
