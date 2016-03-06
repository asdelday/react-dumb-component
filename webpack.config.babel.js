const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

if (TARGET === 'start' || !TARGET) {
  module.exports = require('./webpack/dev.config').start;
}
if (TARGET === 'demo') {
  module.exports = require('./webpack/demo.config').demo;
}
if (TARGET === 'test' || TARGET === 'test:tdd') {
  module.exports = require('./webpack/dev.config').test;
}
if (TARGET === 'dist:normal') {
  module.exports = require('./webpack/dist.config').normal;
}
if (TARGET === 'dist:min') {
  module.exports = require('./webpack/dist.config').minified;
}
