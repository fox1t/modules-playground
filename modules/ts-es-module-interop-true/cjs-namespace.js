"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cjs_namespace_1 = __importDefault(require("cjs-namespace"));
if ((0, cjs_namespace_1.default)() !== 'Hello World')
    throw new Error('Oh no!');
if (cjs_namespace_1.default.default() !== 'Hello World')
    throw new Error('Oh no!');
if (cjs_namespace_1.default.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
const helloWorldStar = __importStar(require("cjs-namespace"));
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
const cjs_namespace_2 = __importDefault(require("cjs-namespace"));
if ((0, cjs_namespace_2.default)() !== 'Hello World')
    throw new Error('Oh no!');
if (cjs_namespace_2.default.default() !== 'Hello World')
    throw new Error('Oh no!');
if (cjs_namespace_2.default.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
const cjs_namespace_3 = require("cjs-namespace");
if ((0, cjs_namespace_3.helloWorld)() !== 'Hello World')
    throw new Error('Oh no!');
Promise.resolve().then(() => __importStar(require('cjs-namespace'))).then(helloWorld => {
    const { helloWorld: namedHelloWorld, default: defaultHelloWorld } = helloWorld;
    console.log(helloWorld);
    if (defaultHelloWorld() !== 'Hello World')
        throw new Error('Oh no!');
    if (namedHelloWorld() !== 'Hello World')
        throw new Error('Oh no!');
})
    .catch(err => {
    console.log(err);
    process.exit(1);
});
