const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

if (TARGET === 'start' || !TARGET) {
  module.exports = require('./webpack/dev.start.config').default;
}
if (TARGET === 'demo') {
  module.exports = require('./webpack/demo.config').default;
}
if (TARGET === 'test' || TARGET === 'test:tdd') {
  module.exports = require('./webpack/dev.test.config').default;
}
if (TARGET === 'dist:normal') {
  module.exports = require('./webpack/dist.normal.config').default;
}
if (TARGET === 'dist:min') {
  module.exports = require('./webpack/dist.minified.config').default;
}
