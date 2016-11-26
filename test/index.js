// require all `test/**/index.js`
const testsContext = require.context('./', true, /(\.spec\.(js|jsx)$)/);

testsContext.keys().forEach(testsContext);

// require all `src/**/index.js`
const componentsContext = require.context('../src/', true, /index\.js$/);

componentsContext.keys().forEach(componentsContext);
