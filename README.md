# react-dumb-component

A personal boilerplate to create ReactJS dumb components quickly.

### Table of Contents
1. [Installation](#installation)
2. [Develop](#develop)
3. [Create Version](#version)
4. [Build bundles](#bundles)
5. [TODO](#todo)
6. [License](#license)

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

<div id="version"></div>

### 3. Create Version
Updates */dist* and *package.json* with the new package version and create a version tag to Git
```
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease]
```

Example:
```
npm version patch -m "Upgrade to %s for reasons"
```

<div id="bundles"></div>

### 4. Build bundles
Generate library bundles without minification
```
npm run dist
```
Generate library bundles minificated
```
npm run dist:min
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

### 5. TODO
* Document boilerplate
* Clean project
* ~~Add CSS Preprocessor support~~
* Add Test support
* Add GitHub pages


<div id="license"></div>

### 6. License
react-dumb-component is available under MIT. See LICENSE for more details.
