import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
/*
 * Namespace
 */
import helloWorld from 'cjs-namespace';
if (helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
if (helloWorld.default() !== 'Hello World')
    throw new Error('Oh no!');
if (helloWorld.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
/*
 * Namespace end
 */
/*
 * ImportStar
 */
import * as helloWorldStar from 'cjs-namespace';
// This expression is not callable.
//   Type 'typeof helloWorld' has no call signatures.ts(2349)
// if (helloWorldStar() !== 'Hello World') throw new Error('Oh no!')
if (helloWorldStar.default() !== 'Hello World')
    throw new Error('Oh no!');
if (helloWorldStar.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
/*
 * ImportStar end
 */
/*
 * ImportRequire
 */
const helloWorldNamespace = __require("cjs-namespace");
if (helloWorldNamespace() !== 'Hello World')
    throw new Error('Oh no!');
if (helloWorldNamespace.default() !== 'Hello World')
    throw new Error('Oh no!');
if (helloWorldNamespace.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
/*
 * ImportRequire end
 */
/*
 * Named default
 */
import { default as DefaultHelloWorld } from 'cjs-namespace';
if (DefaultHelloWorld() !== 'Hello World')
    throw new Error('Oh no!');
if (DefaultHelloWorld.default() !== 'Hello World')
    throw new Error('Oh no!');
if (DefaultHelloWorld.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
/*
 * Named default end
 */
/*
 * Named exports
 */
import { helloWorld as namedHelloWorld } from 'cjs-namespace';
if (namedHelloWorld() !== 'Hello World')
    throw new Error('Oh no!');
/*
 *  end
 */
/*
 * Dynamic import
 */
import('cjs-namespace')
    .then(helloWorld => {
    const { helloWorld: namedHelloWorld, default: defaultHelloWorld } = helloWorld;
    // This expression is not callable.
    //   Type '{ default: typeof helloWorld; helloWorld: typeof helloWorld; }' has no call signatures.ts(2349)
    // if (helloWorld() !== 'Hello World') throw new Error('Oh no!')
    if (defaultHelloWorld() !== 'Hello World')
        throw new Error('Oh no!');
    if (namedHelloWorld() !== 'Hello World')
        throw new Error('Oh no!');
})
    .catch(err => {
    console.log(err);
    process.exit(1);
});
/*
 * Dynamic import end
 */
