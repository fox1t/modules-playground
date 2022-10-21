"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_triplet_1 = require("ts-triplet");
const HelloWorldStar = require("ts-triplet");
const HelloWorldNamespace = require("ts-triplet");
if ((0, ts_triplet_1.default)() !== 'Hello World')
    throw new Error('Oh no!');
if (HelloWorldNamespace.default() !== 'Hello World')
    throw new Error('Oh no!');
if (HelloWorldNamespace.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
if (HelloWorldStar.default() !== 'Hello World')
    throw new Error('Oh no!');
if (HelloWorldStar.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
const ts_triplet_2 = require("ts-triplet");
if ((0, ts_triplet_2.default)() !== 'Hello World')
    throw new Error('Oh no!');
const ts_triplet_3 = require("ts-triplet");
if ((0, ts_triplet_3.helloWorld)() !== 'Hello World')
    throw new Error('Oh no!');
Promise.resolve().then(() => require('ts-triplet')).then(helloWorld => {
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
