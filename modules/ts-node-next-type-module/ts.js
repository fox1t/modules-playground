/*
 *  Namespace export
 */
import helloWorld from 'ts';
import * as helloWorldStar from 'ts';
if (helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
// this property doesn't exit since it exports a pure TS module and imports it in TS. No namespace!
// if (helloWorld.helloWorld() !== 'Hello World') throw new Error('Oh no!')
// on the other hand star import imports correctly the namespace
if (helloWorldStar.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
if (helloWorldStar.default() !== 'Hello World')
    throw new Error('Oh no!');
/*
 *  end
 */
/*
 *  Named exports
 */
import { default as defaultHelloWorld } from 'ts';
if (defaultHelloWorld() !== 'Hello World')
    throw new Error('Oh no!');
// on the other hand helloWorld works when name imported
import { helloWorld as namedHelloWorld } from 'ts';
if (namedHelloWorld() !== 'Hello World')
    throw new Error('Oh no!');
/*
 *  end
 */
/*
 *  Dynamic import
 */
// helloWorld is a plain object
// {
//   helloWorld: [Function: helloWorld],
//   default: [Function: helloWorld]
// }
import('ts')
    .then(helloWorld => {
    const { default: defaultHelloWorld, helloWorld: namedHelloWorld } = helloWorld;
    if (defaultHelloWorld() !== 'Hello World')
        throw new Error('Oh no!');
    if (namedHelloWorld() !== 'Hello World')
        throw new Error('Oh no!');
})
    .catch(err => {
    console.log(err);
    process.exit(1);
});
