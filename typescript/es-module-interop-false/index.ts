import Fastify from "fastify";
import { fastify } from "fastify";
import * as FastifyNamespace from "fastify";

const tsconfig = require("../tsconfig.json");

const esModuleInterop = tsconfig.compilerOptions.esModuleInterop;

const fastify1 = Fastify();

fastify1
  .listen(3020)
  .then(() => {
    console.log(
      `[TS - esModuleInterop: ${esModuleInterop}] \`import Fastify from 'fastify';\` import is running. (namespace \`.default\` prop)`
    );
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

const fastify2 = fastify();

fastify2
  .listen(3021)
  .then(() => {
    console.log(
      `[TS - esModuleInterop: ${esModuleInterop}] \`import { fastify } from "fastify";\` is running. (fastify named import)`
    );
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

// since we used star import FastifyNamespace is never callable because of ESM spec
// however we can still use its "named" exports
const fastify3 = FastifyNamespace.default();

fastify3
  .listen(3022)
  .then(() => {
    console.log(
      `[TS - esModuleInterop: ${esModuleInterop}] \`import * as FastifyNamespace from "fastify";\` star import namespace is running (using \`.default\` prop).`
    );
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

// this case is the same as `import { fastify } from "fastify";` but I want to make this clear
const fastify4 = FastifyNamespace.fastify();

fastify4
  .listen(3023)
  .then(() => {
    console.log(
      `[TS - esModuleInterop: ${esModuleInterop}] \`import * as FastifyNamespace from "fastify";\` star import namespace named import is running (using \`.fastify\` prop).`
    );
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

// dynamic namespace import is not callable: that is, it is the same as star import
// however we can still use its "named" exports
import("fastify")
  .then(({ default: defaultFastify, fastify }) => {
    const fastify5 = defaultFastify();
    const fastify6 = fastify();

    fastify5
      .listen(3024)
      .then(() => {
        console.log(
          `[TS - esModuleInterop: ${esModuleInterop}] \`import("fastify");\` dynamic namespace import is running (using \`.default\` prop).`
        );
      })
      .catch((err) => {
        console.log(err);
        process.exit(1);
      });

    fastify6
      .listen(3025)
      .then(() => {
        console.log(
          `[TS - esModuleInterop: ${esModuleInterop}] \`import("fastify");\` dynamic namespace import is running (using \`.fastify\` prop).`
        );
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
