export = helloWorld;

declare namespace helloWorld {
  type HelloWorldResponse = 'Hello World';
}

declare function helloWorld(): helloWorld.HelloWorldResponse;
