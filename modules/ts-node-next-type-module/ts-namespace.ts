/*
 * Namespace
 */
// This module is declared with using 'export =', and can only be used as a default import when using the 'esModuleInterop: true'
import helloWorld from 'ts-namespace'
if (helloWorld() !== 'Hello World') throw new Error('Oh no!')

// Property 'default' does not exist on type '{ (): string; helloWorld: any; }'.ts(2339)
// if (helloWorld.default() !== 'Hello World') throw new Error('Oh no!')
if (helloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Namespace end
 */

/*
 * ImportStar
 */
import * as helloWorldStar from 'ts-namespace'
// This expression is not callable.
//   Type '{ default: { (): string; helloWorld: any; }; helloWorld: any; }' has no call signatures.ts(2349)
// if (helloWorldStar() !== 'Hello World') throw new Error('Oh no!')

// TS adds a `default` export during the import via __importDefault https://www.typescriptlang.org/tsconfig#esModuleInterop
if (helloWorldStar.default() !== 'Hello World') throw new Error('Oh no!')
if (helloWorldStar.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * ImportStar end
 */

/*
 * ImportRequire
 */
import HelloWorldNamespace = require('ts-namespace')
if (HelloWorldNamespace() !== 'Hello World') throw new Error('Oh no!')
// Property 'default' does not exist on type '{ (): string; helloWorld: any; }'.ts(2339)
// if (HelloWorldNamespace.default() !== 'Hello World') throw new Error('Oh no!')
if (HelloWorldNamespace.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * ImportRequire end
 */

/*
 * Named default
 */
import { default as DefaultHelloWorld } from 'ts-namespace'
if (DefaultHelloWorld() !== 'Hello World') throw new Error('Oh no!')
// Property 'default' does not exist on type '{ (): string; helloWorld: any; }'.ts(2339)
// if (DefaultHelloWorld.default() !== 'Hello World') throw new Error('Oh no!')
if (DefaultHelloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Named default end
 */

/*
 * Named
 */
import { helloWorld as namedHelloWorld } from 'ts-namespace'
if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 * Named end
 */

/*
 *  Dynamic import
 */
// in TS dynamic namespace import is callable (in ESM IT IS NOT CALLABLE)
// because it has the same shape as `import * as helloWorldStar from 'ts-namespace'` and `import helloWorld = require('ts-namespace')`
// typescript dynamic import is just a Promise that calls `require()` after the compilation
//[Function: helloWorld] {
//   helloWorld: [Circular *1]
//}

import('ts-namespace')
  .then(helloWorld => {
    const { helloWorld: namedHelloWorld, default: defaultHelloWorld } = helloWorld
    // This expression is not callable.
    //   Type '{ default: { (): string; helloWorld: any; }; helloWorld: any; }' has no call signatures.ts(2349)
    // if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
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
