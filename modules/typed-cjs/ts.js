/*
 *  Namespace export
 */
const helloWorld = require('ts')
// namespace is not callable
// if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
if (helloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
if (helloWorld.default() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Named exports
 */

const { default: defaultHelloWorld } = require('ts')

if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')

// on the other hand helloWorld works when name imported
const { helloWorld: namedHelloWorld } = require('ts')
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
// this has worng types because of import chaning the module and TS isn't aware of it
import('ts')
  .then(helloWorld => {
    // here we have also a named import on top level. It is missing from the other test cases
    const { helloWorld: namedHelloWorld } = helloWorld
    if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')

    // defaultHelloWorld is not a function even if TS think that it is
    // const { default: defaultHelloWorld } = helloWorld
    // if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')

    // typescript thinks that default and helloWorld don't exist even if they are added by `import()`
    // if (defaultHelloWorld.default() !== 'Hello World') throw new Error('Oh no!')
    // if (defaultHelloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
