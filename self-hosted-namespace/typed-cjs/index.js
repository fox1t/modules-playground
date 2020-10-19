const helloWorld = require("../");
// Non-supported
// const { helloWorld: namedHelloWorld } = require("../");
// const { default: defaultHelloWorld } = require("../");

/** @type {import('../').HelloWorldResponse} */
const desiredResult = 'Hello World';

if (helloWorld() !== desiredResult) throw new Error('Oh no!');
// Non-supported
// if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!');
// if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!');
