/* eslint-disable no-console */

/*
$ node dist/src/index.js
$ npx playwright-test dist/src/index.js --runner benchmark
*/

import Benchmark from 'benchmark'
import cjs from './cjs.cjs'
import { ESMClass, right as esmRight } from './esm.js'

const CJSClass = cjs.CJSClass
const cjsRight = cjs.right

new Benchmark.Suite()
  .add('esm', () => {
    const obj = new ESMClass()
    obj.method()
  })
  .add('cjs', () => {
    const obj = new CJSClass()
    obj.method()
  })
  .add('esm right', () => {
    esmRight(Math.random())
  })
  .add('cjs right', () => {
    cjsRight(Math.random())
  })
  .on('error', (err) => {
    console.error(err)
  })
  .on('cycle', (event) => {
    console.info(String(event.target))
  })
  .on('complete', function () {
    console.info(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  // run async
  .run({ async: true })
