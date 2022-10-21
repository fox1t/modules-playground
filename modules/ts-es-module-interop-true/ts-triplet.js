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
const ts_triplet_1 = __importDefault(require("ts-triplet"));
const HelloWorldStar = __importStar(require("ts-triplet"));
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
const ts_triplet_2 = __importDefault(require("ts-triplet"));
if ((0, ts_triplet_2.default)() !== 'Hello World')
    throw new Error('Oh no!');
const ts_triplet_3 = require("ts-triplet");
if ((0, ts_triplet_3.helloWorld)() !== 'Hello World')
    throw new Error('Oh no!');
Promise.resolve().then(() => __importStar(require('ts-triplet'))).then(helloWorld => {
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
