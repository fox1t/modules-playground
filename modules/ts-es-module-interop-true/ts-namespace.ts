/*
 *  Namespace export
 */
// This module is declared with using 'export =', and can only be used as a default import when using the 'esModuleInterop: true'
import helloWorld from 'ts-namespace'
import * as helloWorldStar from 'ts-namespace'
import helloWorldNamespace = require('ts-namespace')
if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
// star import is not callable!
// if (helloWorldStar() !== 'Hello World') throw new Error('Oh no!')
// TS adds a `default` export during the import via __importDefault https://www.typescriptlang.org/tsconfig#esModuleInterop
if (helloWorldStar.default() !== 'Hello World') throw new Error('Oh no!')
if (helloWorldStar.helloWorld() !== 'Hello World') throw new Error('Oh no!')
if (helloWorldNamespace() !== 'Hello World') throw new Error('Oh no!')
if (helloWorldNamespace.helloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
 */

/*
 *  Named exports
 */
import { helloWorld as namedHelloWorld } from 'ts-namespace'
if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
/*
 *  end
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
    const { helloWorld: namedHelloWorld } = helloWorld
    // helloWorld has no call signature. Again `import('ts-namespace')` is not compilant to `import helloWorld from 'ts-namespace'`
    // if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
    if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!')
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
/*
 *  end
 */
