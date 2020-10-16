const helloWorld = require("../");
const { helloWorld: namedHelloWorld } = require("../");
const { default: defaultHelloWorld } = require("../");

if (helloWorld() !== 'Hello World') throw new Error('Oh no!');
if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!');
if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!');
