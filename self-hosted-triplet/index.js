const helloWorld = () => 'Hello World';

/**
 * These export configurations enable JS and TS developers
 * to consumer fastify in whatever way best suits their needs.
 * Some examples of supported import syntax includes:
 * - `const helloWorld = require('./triplet')`
 * - `const { helloWorld } = require('./triplet')`
 * - `import * as HelloWorld from './triplet'`
 * - `import { helloWorld, TSC_definition } from './triplet'`
 * - `import helloWorld from './triplet'`
 * - `import helloWorld, { TSC_definition } from './triplet'`
 */
module.exports = helloWorld
module.exports.helloWorld = helloWorld
module.exports.default = helloWorld