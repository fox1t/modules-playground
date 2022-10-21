"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_1 = require("ts");
const helloWorldStar = require("ts");
if ((0, ts_1.default)() !== 'Hello World')
    throw new Error('Oh no!');
if (helloWorldStar.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
if (helloWorldStar.default() !== 'Hello World')
    throw new Error('Oh no!');
const ts_2 = require("ts");
if ((0, ts_2.default)() !== 'Hello World')
    throw new Error('Oh no!');
const ts_3 = require("ts");
if ((0, ts_3.helloWorld)() !== 'Hello World')
    throw new Error('Oh no!');
Promise.resolve().then(() => require('ts')).then(helloWorld => {
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
