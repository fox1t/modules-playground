"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helloWorldStar = require("ts-namespace");
const helloWorld = require("cjs-namespace");
if (helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
if (helloWorldStar() !== 'Hello World')
    throw new Error('Oh no!');
if (helloWorldStar.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
const cjs_namespace_1 = require("cjs-namespace");
if ((0, cjs_namespace_1.helloWorld)() !== 'Hello World')
    throw new Error('Oh no!');
Promise.resolve().then(() => require('ts-namespace')).then(helloWorld => {
    const { helloWorld: namedHelloWorld } = helloWorld;
    if (helloWorld() !== 'Hello World')
        throw new Error('Oh no!');
    if (namedHelloWorld() !== 'Hello World')
        throw new Error('Oh no!');
})
    .catch(err => {
    console.log(err);
    process.exit(1);
});
