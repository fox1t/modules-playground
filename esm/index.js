import Fastify from "fastify";

// we currently dont' support named exports in ESM context
// import { fastify } from "fastify";
//          ^^^^^^^
// SyntaxError: The requested module 'fastify' is expected to be of type CommonJS, which does not support named exports. CommonJS modules can be imported by importing the default export.

const fastify1 = Fastify();

fastify1
  .listen(3010)
  .then(() => {
    console.log(`[ESM] namespace import is running.`);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

// dynamic namespace import is not callable because because this is its shape:
// [Module] {
//   default: <ref *1> [Function: fastify] {
//     fastify: [Circular *1],
//     default: [Circular *1]
//   }
// }
// however we can still use its default export
import("fastify")
  .then(({ default: defaultFastify }) => {
    const fastify5 = defaultFastify();

    fastify5
      .listen(3011)
      .then(() => {
        console.log(
          `[ESM] \`import("fastify");\` dynamic namespace import is running (using \`.default\` prop).`
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
