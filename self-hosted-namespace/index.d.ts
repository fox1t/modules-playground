export = helloWorld;

declare namespace helloWorld2 {
  type HelloWorldResponse = 'Hello World';
}

declare function helloWorld(): helloWorld2.HelloWorldResponse;
declare type helloWorld3 = { helloWorld: true };

