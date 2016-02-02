# react-dumb-component

[![GitHub issues](https://img.shields.io/github/issues/asdelday/react-dumb-component.svg)](https://github.com/asdelday/react-dumb-component/issues)
[![GitHub forks](https://img.shields.io/github/forks/asdelday/react-dumb-component.svg)](https://github.com/asdelday/react-dumb-component/network)
[![GitHub stars](https://img.shields.io/github/stars/asdelday/react-dumb-component.svg)](https://github.com/asdelday/react-dumb-component/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/asdelday/react-dumb-component/master/LICENSE)

A personal boilerplate to create ReactJS dumb components quickly.

### Table of Contents
1. [Installation](#installation)
2. [Develop](#develop)
3. [Demo](#demo)
4. [Testing](#test)
5. [Create Version](#version)
6. [Build bundles](#bundles)
7. [TODO](#todo)
8. [License](#license)

---

<div id="installation"></div>

### 1. Installation
Install all the dependencies for the project.

```
npm install
```

<div id="develop"></div>

### 2. Develop
Runs a development server at *https://localhost:8080* and use Hot Module Replacement.
To override the default host and port through env (HOST, PORT)

```
npm start
```

<div id="demo"></div>

### 3. Demo
Runs a server to show the library demo at *https://localhost:8080*.
To override the default host and port through env (HOST, PORT)

```
npm run demo
```

<div id="test"></div>

### 4. Testing
Using Karma as test runner, mocha as test library and chai as assertions library.

To run test once:
```
npm test
```

To run tests with watcher:
```
npm run test:tdd
```

To run both:
```
npm run test:all
```

<div id="version"></div>

### 5. Create Version
Updates */dist* and *package.json* with the new package version and create a version tag to Git
```
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease]
```

Example:
```
npm version patch -m "Upgrade to %s for reasons"
```

<div id="bundles"></div>

### 6. Build bundles
Generate library bundles without minification
```
npm run dist:normal
```
Generate library bundles minificated
```
npm run dist:min
```

Generate both, minificated and normal, library bundles
```
npm run dist
```

---

**Important:** Change package.json info to you own and 
change Library config at webpack.config.babel.js:

```javascript
const config = {
  paths: {
    dist: path.join(ROOT_PATH, 'dist'),
    src: path.join(ROOT_PATH, 'src'),
    demo: path.join(ROOT_PATH, 'demo'),
    dev: path.join(ROOT_PATH, 'src/app.js'),
  },
  filename: pkg.name,
  library: 'DumbComponent',
};
```

**Important:** If you are using external dependencies, you will need to include them into webpack
externals. Like the example below:

```javascript
var webpackConfig = {
  // Other options ...
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
  }
  // ... Other options
}

```

<div id="todo"></div>

### 7. TODO
* ~~Document boilerplate~~
* ~~Clean project~~
* ~~Add CSS Preprocessor support~~
* ~~Add Test support~~
* Add GitHub pages


<div id="license"></div>

### 8. License
react-dumb-component is available under MIT. See LICENSE for more details.
