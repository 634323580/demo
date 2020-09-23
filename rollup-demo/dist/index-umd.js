// welcome to imooc.com
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['sam-umd'] = factory());
}(this, (function () { 'use strict';

  const a = 2;

  function main() {
    console.log(a);
  }

  return main;

})));
// powered by sam
