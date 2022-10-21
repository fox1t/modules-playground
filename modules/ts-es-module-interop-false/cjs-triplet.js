"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cjs_triplet_1 = require("cjs-triplet");
const HelloWorldStar = require("cjs-triplet");
const HelloWorldNamespace = require("cjs-triplet");
if ((0, cjs_triplet_1.default)() !== 'Hello World')
    throw new Error('Oh no!');
if (HelloWorldNamespace.default() !== 'Hello World')
    throw new Error('Oh no!');
if (HelloWorldNamespace.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
if (HelloWorldStar.default() !== 'Hello World')
    throw new Error('Oh no!');
if (HelloWorldStar.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
const cjs_triplet_2 = require("cjs-triplet");
if ((0, cjs_triplet_2.default)() !== 'Hello World')
    throw new Error('Oh no!');
const cjs_triplet_3 = require("cjs-triplet");
if ((0, cjs_triplet_3.helloWorld)() !== 'Hello World')
    throw new Error('Oh no!');
Promise.resolve().then(() => require('cjs-triplet')).then(helloWorld => {
    const { helloWorld: namedHelloWorld, default: defaultHelloWorld } = helloWorld;
    if (defaultHelloWorld() !== 'Hello World')
        throw new Error('Oh no!');
    if (namedHelloWorld() !== 'Hello World')
        throw new Error('Oh no!');
})
    .catch(err => {
    console.log(err);
    process.exit(1);
});
