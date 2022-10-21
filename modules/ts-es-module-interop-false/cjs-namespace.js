"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helloWorld = require("cjs-namespace");
if (helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
if (helloWorld.default() !== 'Hello World')
    throw new Error('Oh no!');
if (helloWorld.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
const helloWorldStar = require("cjs-namespace");
if (helloWorldStar() !== 'Hello World')
    throw new Error('Oh no!');
if (helloWorldStar.default() !== 'Hello World')
    throw new Error('Oh no!');
if (helloWorldStar.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
const HelloWorldNamespace = require("cjs-namespace");
if (HelloWorldNamespace() !== 'Hello World')
    throw new Error('Oh no!');
if (HelloWorldNamespace.default() !== 'Hello World')
    throw new Error('Oh no!');
if (HelloWorldNamespace.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
const cjs_namespace_1 = require("cjs-namespace");
if ((0, cjs_namespace_1.default)() !== 'Hello World')
    throw new Error('Oh no!');
if (cjs_namespace_1.default.default() !== 'Hello World')
    throw new Error('Oh no!');
if (cjs_namespace_1.default.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
const cjs_namespace_2 = require("cjs-namespace");
if ((0, cjs_namespace_2.helloWorld)() !== 'Hello World')
    throw new Error('Oh no!');
Promise.resolve().then(() => require('cjs-namespace')).then(helloWorld => {
    const { helloWorld: namedHelloWorld, default: defaultHelloWorld } = helloWorld;
    if (helloWorld() !== 'Hello World')
        throw new Error('Oh no!');
    if (namedHelloWorld() !== 'Hello World')
        throw new Error('Oh no!');
    if (defaultHelloWorld() !== 'Hello World')
        throw new Error('Oh no!');
})
    .catch(err => {
    console.log(err);
    process.exit(1);
});
