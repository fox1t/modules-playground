"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_2 = require("fastify");
const FastifyNamespace = __importStar(require("fastify"));
const tsconfig = require("../tsconfig.json");
const esModuleInterop = tsconfig.compilerOptions.esModuleInterop;
const fastify1 = fastify_1.default();
fastify1
    .listen(3030)
    .then(() => {
    console.log(`[TS - esModuleInterop: ${esModuleInterop}] \`import Fastify from 'fastify';\` import is running. (namespace \`.default\` prop)`);
})
    .catch((err) => {
    console.log(err);
    process.exit(1);
});
const fastify2 = fastify_2.fastify();
fastify2
    .listen(3031)
    .then(() => {
    console.log(`[TS - esModuleInterop: ${esModuleInterop}] \`import { fastify } from "fastify";\` is running. (fastify named import)`);
})
    .catch((err) => {
    console.log(err);
    process.exit(1);
});
// since we used star import FastifyNamespace is never callable because of ESM spec
// however we can still use its "named" exports
const fastify3 = FastifyNamespace.default();
fastify3
    .listen(3032)
    .then(() => {
    console.log(`[TS - esModuleInterop: ${esModuleInterop}] \`import * as FastifyNamespace from "fastify";\` star import namespace is running (using \`.default\` prop).`);
})
    .catch((err) => {
    console.log(err);
    process.exit(1);
});
// this case is the same as `import { fastify } from "fastify";` but I want to make this clear
const fastify4 = FastifyNamespace.fastify();
fastify4
    .listen(3033)
    .then(() => {
    console.log(`[TS - esModuleInterop: ${esModuleInterop}] \`import * as FastifyNamespace from "fastify";\` star import namespace named import is running (using \`.fastify\` prop).`);
})
    .catch((err) => {
    console.log(err);
    process.exit(1);
});
// dynamic namespace import is not callable: that is, it is the same as star import
// however we can still use its "named" exports
Promise.resolve().then(() => __importStar(require("fastify"))).then(({ default: defaultFastify, fastify }) => {
    const fastify5 = defaultFastify();
    const fastify6 = fastify();
    fastify5
        .listen(3034)
        .then(() => {
        console.log(`[TS - esModuleInterop: ${esModuleInterop}] \`import("fastify");\` dynamic namespace import is running (using \`.default\` prop).`);
    })
        .catch((err) => {
        console.log(err);
        process.exit(1);
    });
    fastify6
        .listen(3035)
        .then(() => {
        console.log(`[TS - esModuleInterop: ${esModuleInterop}] \`import("fastify");\` dynamic namespace import is running (using \`.fastify\` prop).`);
    })
        .catch((err) => {
        console.log(err);
        process.exit(1);
    });
})
    .catch((err) => {
    console.log(err);
    process.exit(1);
});
