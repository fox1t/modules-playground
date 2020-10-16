import helloWorld from "../../";
import { helloWorld as namedHelloWorld } from "../../";
import * as HelloWorldNamespace from "../../";
import helloWorldRequire = require("../../")

if (helloWorld() !== 'Hello World') throw new Error('Oh no!');
if (namedHelloWorld() !== 'Hello World') throw new Error('Oh no!');
if (HelloWorldNamespace.default() !== 'Hello World') throw new Error('Oh no!');
if (helloWorldRequire() !== 'Hello World') throw new Error('Oh no!');

import("../../")
  .then(({
    default: defaultHelloWorld,
    helloWorld
  }) => {
    if (defaultHelloWorld() !== 'Hello World') throw new Error('Oh no!');
    if (helloWorld() !== 'Hello World') throw new Error('Oh no!');
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

import("../../")
  .then((helloWorld) => {
    if (helloWorld() !== 'Hello World') throw new Error('Oh no!');
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });