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
const ts_namespace_1 = __importDefault(require("ts-namespace"));
const helloWorldStar = __importStar(require("ts-namespace"));
const helloWorldNamespace = require("ts-namespace");
if ((0, ts_namespace_1.default)() !== 'Hello World')
    throw new Error('Oh no!');
if (helloWorldStar.default() !== 'Hello World')
    throw new Error('Oh no!');
if (helloWorldStar.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
if (helloWorldNamespace() !== 'Hello World')
    throw new Error('Oh no!');
if (helloWorldNamespace.helloWorld() !== 'Hello World')
    throw new Error('Oh no!');
const ts_namespace_2 = require("ts-namespace");
if ((0, ts_namespace_2.helloWorld)() !== 'Hello World')
    throw new Error('Oh no!');
Promise.resolve().then(() => __importStar(require('ts-namespace'))).then(helloWorld => {
    const { helloWorld: namedHelloWorld } = helloWorld;
    if (namedHelloWorld() !== 'Hello World')
        throw new Error('Oh no!');
})
    .catch(err => {
    console.log(err);
    process.exit(1);
});
