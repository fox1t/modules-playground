const Fastify = require("fastify");
const { fastify } = require("fastify");
const { default: fastifiDefault } = require("fastify");

const fastify1 = Fastify();

fastify1
  .listen(3000)
  .then(() => {
    console.log(`[CJS] module.exports is running.`);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

const fastify2 = fastify();

fastify2
  .listen(3001)
  .then(() => {
    console.log(`[CJS] named require is running.`);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

const fastify3 = fastifiDefault();

fastify2
  .listen(3002)
  .then(() => {
    console.log(`[CJS] default property require is running.`);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
