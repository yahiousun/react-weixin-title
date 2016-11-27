/**
 * react-weixin-title
 *
 * Copyright © 2016 yahiousun. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

const fs = require('fs');
const del = require('del');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const pkg = require('../package.json');

let promise = Promise.resolve();

// Clean up the output directory
promise = promise.then(() => del(['dist/lib/*']));

// Compile source code into a distributable format with Babel
['es', 'cjs', 'umd'].forEach((format) => {
  promise = promise.then(() => rollup.rollup({
    entry: 'src/index.js',
    external: Object.keys(pkg.dependencies),
    plugins: [babel(Object.assign(pkg.babel, {
      babelrc: false,
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      presets: pkg.babel.presets.map(x => (x === 'latest' ? ['latest', { es2015: { modules: false } }] : x)),
    }))],
  }).then(bundle => bundle.write({
    dest: `dist/lib/${format === 'cjs' ? 'index' : `index.${format}`}.js`,
    format,
    sourceMap: true,
    moduleName: format === 'umd' ? pkg.name.replace(/-([a-z])/g, match => match[1].toUpperCase()) : undefined,
  })));
});

// Copy package.json and LICENSE.txt
promise = promise.then(() => {
  delete pkg.private;
  delete pkg.devDependencies;
  delete pkg.scripts;
  delete pkg.eslintConfig;
  delete pkg.babel;
  delete pkg.dependencies['react-router'];

  Object.assign(pkg, {
    main: 'index.js',
    'jsnext:main': 'index.es.js',
    //typings: 'index.d.ts',
  });

  fs.writeFileSync('dist/lib/package.json', JSON.stringify(pkg, null, '  '), 'utf-8');
  //fs.writeFileSync('lib/index.d.ts', fs.readFileSync('typings/index.d.ts', 'utf-8'), 'utf-8');
  fs.writeFileSync('dist/lib/LICENSE', fs.readFileSync('LICENSE', 'utf-8'), 'utf-8');
  fs.writeFileSync('dist/lib/README.md', fs.readFileSync('README.md', 'utf-8'), 'utf-8');
});

promise.catch(err => console.error(err.stack)); // eslint-disable-line no-console
