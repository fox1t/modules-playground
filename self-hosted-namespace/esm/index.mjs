import helloWorld from "../index.js";

// we currently dont' support named exports in ESM context
// import { fastify } from "fastify";
//          ^^^^^^^
// SyntaxError: The requested module 'fastify' is expected to be of type CommonJS, which does not support named exports. CommonJS modules can be imported by importing the default export.

if (helloWorld() !== 'Hello World') throw new Error('Oh no!');

// dynamic namespace import is not callable because because this is its shape:
// [Module] {
//   default: <ref *1> [Function: fastify] {
//     fastify: [Circular *1],
//     default: [Circular *1]
//   }
// }
// however we can still use its default export
import("../index.js")
  .then(({ default: defaultHelloWorld }) => {
    if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!');
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
