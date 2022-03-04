[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Structure
```shell
tree -I 'node_modules|cache|dist'
```

```
├── README.md
├── apps
│   ├── dm
│   │   ├── src
│   │   │   ├── dm.controller.spec.ts
│   │   │   ├── dm.controller.ts
│   │   │   ├── dm.module.ts
│   │   │   ├── dm.service.ts
│   │   │   └── main.ts
│   │   ├── test
│   │   │   ├── app.e2e-spec.ts
│   │   │   └── jest-e2e.json
│   │   └── tsconfig.app.json
│   ├── jsf
│   │   ├── src
│   │   │   ├── jsf.controller.spec.ts
│   │   │   ├── jsf.controller.ts
│   │   │   ├── jsf.module.ts
│   │   │   ├── jsf.service.ts
│   │   │   └── main.ts
│   │   ├── test
│   │   │   ├── app.e2e-spec.ts
│   │   │   └── jest-e2e.json
│   │   └── tsconfig.app.json
│   └── ge
│       ├── src
│       │   ├── ge.controller.spec.ts
│       │   ├── ge.controller.ts
│       │   ├── ge.module.ts
│       │   ├── ge.service.ts
│       │   └── main.ts
│       ├── test
│       │   ├── app.e2e-spec.ts
│       │   └── jest-e2e.json
│       └── tsconfig.app.json
├── libs
│   └── common
│       ├── src
│       │   ├── common.module.ts
│       │   ├── common.service.spec.ts
│       │   ├── common.service.ts
│       │   └── index.ts
│       └── tsconfig.lib.json
├── nest-cli.json
├── package-lock.json
├── package.json
├── tsconfig.build.json
├── tsconfig.json
├── webpack-hmr.config.js
└── yarn.lock

```



## License

Nest is [MIT licensed](LICENSE).
