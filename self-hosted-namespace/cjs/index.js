const helloWorld = require("../");
// Non-supported
// const { helloWorld: namedHelloWorld } = require("../");
// const { default: defaultHelloWorld } = require("../");

if (helloWorld() !== 'Hello World') throw new Error('Oh no!');
// Non-supported
// if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!');
// if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!');
