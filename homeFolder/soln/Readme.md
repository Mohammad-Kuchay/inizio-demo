# banking-ms



## NPM Functional Dependencies

To adhere to microservice design that is based on hexagonal architecture and DDD tactical design patterns, following npm packages are being leveraged

1. InversifyJS : InversifyJS is a lightweight inversion of control (IoC) container for TypeScript and JavaScript apps. An IoC container uses a class constructor to identify and inject its dependencies. InversifyJS has a friendly API and encourages the usage of the best OOP and IoC practices.
1. inversify-express-utils : Utilities for the development of express applications with Inversify. Will be leveraged for REST services
1. TypeORM: ORM to connect to databases like SQL Server
1. mssql: Microsoft SQL Server client for Node.js
1. Open API Specification using Swagger
   1. swagger-ui-express: This module allows us to serve auto-generated swagger-ui generated API docs from express, based on a swagger.json file. The result is living documentation for our API hosted from your API server via a route.
   1. swagger-jsdoc: swagger-jsdoc enables us to integrate Swagger using JSDoc comments in your code. Just add @swagger on top of DocBlock and declare the meaning of code in YAML complying to the OpenAPI specification.

## NPM Developer Tooling Dependencies

1. Typescript: TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.
1. ts-node: TypeScript execution and REPL for node.js, with source map support.
1. Testing
   1. Mocha: Mocha is a JavaScript test framework that runs in the browser and on Node.js. One of the major features of Mocha is its ability to make asynchronous testing simple and fun, allowing for flexible and accurate reporting.
   1. SuperTest: SuperTest offers a very simple way to test APIs with just few lines of commands and well documented doc.
1. gulp: the streaming build system

## Debugging in Visual Studio Code

If you are using Visual Studio Code as editor, to enable debug, please use below configuration in launch.json

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "name": "Node: Nodemon",
            "processId": "${command:PickProcess}",
            "restart": true,
            "protocol": "inspector",
        },
    ]
}
```

Use the below command to start the application

```bash
npm run dev:debug
```

click on F5 to start debug

![debugging](./media/debugging.jpg)

select the nodemon process to start debugging

## Environment Variables

Environment variables will be used to pass in any configuration to the microservices. This information might be comming from Kubernets.

Microservice application specific confifurations like secrets might come from key vaults like Azure Key vault or Hashi corp key vault

The Azure Key Vault authentication information can can be injected using Kubernetes ConfigMaps and passed to microservice docker container via environment variable

Environment key for application environment - development, qa, sandbox, production etc:

Run with `NODE_ENV` set to `production`.

```bash
-e "NODE_ENV=production"
```

## Gulp builds

Gulp commands built:

1. clean: clean the target directory
1. build: complie the TypeScript source code to JavaScript (based on options specified in tsconfig.json)

These gulp commands are available as npm scripts

1. build: gulp build command
1. start: run the build

Apart from above script, there is one script for triggering mocha tests - "test"

## Docker builds

To generate docker image for this microservice, run the below command in root directory:

```bash
docker build image build . <username>/banking-ms
```

To generate all related depedancies, for example, mongo db that gets consumed by microservice, run the below command in root directory:

```bash
docker-compose up
```

## Unit and Integration Tests

To enable TDD (test-driven development) for our microservice, test cases will be coded in TypeScript with Mocha and Chai to create the tests.

ts-node dev package helps Mocha to understand the tests that are written in TypeScript

SuperTest:
SuperTest offers a very simple way to test APIs with just few lines of commands and well documented doc.

Mocha:
Mocha is a JavaScript test framework that runs in the browser and on Node.js. One of the major features of Mocha is its ability to make asynchronous testing simple and fun, allowing for flexible and accurate reporting.

Chai:
Chai shines on the freedom of choosing the interface we prefer: “should”, “expect”, “assert” they are all available. I personally use should but you are free to check out the API and switch to the others two. Lastly Chai HTTP addon allows Chai library to easily use assertions on HTTP requests which suits our needs.

## REST Service Endpoints

Launch the swagger endpoint to discover the REST API Servcies

```bash
https://<host>/swagger/
```

## Running the demo

Local way:

```bash
npm run start
```

Docker way:

```bash
docker-compose up
```

## Documentation using typeDoc

Documentation for the code is generated using typedoc package.

```bash
npm install typedoc
```

If using VS Code, Installing an extension called [Document This](https://marketplace.visualstudio.com/items?itemName=joelday.docthis) will come in handy when adding inline comments to code. After installing the extension Pressing Alt+Cntrl+D twice will add comments with necessary parameters extracted from the code.

For typedoc, either add a separate configuration file or we can add it inside the already existing tsconfig.json.

```json
"typedocOptions": {
    "mode": "file",
    "out": "docs",
    "media": "./media",
    "hideGenerator": "true"
}
```

For further configurations, documentation for typedoc is available in <https://typedoc.org>.

to generate documentation using the added configuration:

Run:

```bash
npx typedoc ./src
```

"./src" here is the folder from which the code has to be documented.
