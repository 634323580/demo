function comment() {
  if (arguments.length === 0) {
    return // 如果参数为0直接返回
  }
  let maxlength = 0
  for (let i = 0; i < arguments.length; i++) {
    const length = arguments[i].toString().length
    maxlength = length > maxlength ? length : maxlength // 获取最长的参数
  }
  maxlength = maxlength === 0 ? maxlength : maxlength + 1 // 在最长参数长度上再加1，为了美观
  let seperator = ''
  for (let i = 0; i < maxlength; i++) {
    seperator += '=' // 根据参数长度生成分隔符
  }
  const c = []
  c.push('/**\n') // 添加注释头
  c.push(' * ' + seperator + '\n') // 添加注释分隔符
  for (let i = 0; i < arguments.length; i++) {
    c.push(' * ' + arguments[i] + '\n') // 加入参数内容
  }
  c.push(' * ' + seperator + '\n') // 添加注释分隔符
  c.push(' **/') // 添加注释尾
  return c.join('') // 合并参数为字符串
}
import resolve from 'rollup-plugin-node-resolve'
// rollup.js是无法识别CommonJS模块的，此时我们需要借助commonjs插件来解决这个问题。
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import { uglify } from 'rollup-plugin-uglify'
export default {
  input: './src/plugin/main.js',
  output: [{
    file: './dist/index-plugin-cjs.js',
    format: 'cjs',
    banner: comment('welcome to imooc.com', 'this is a rollup test project'),
    footer: comment('powered by sam', 'copyright 2018')
  }, {
    file: './dist/index-plugin-es.js',
    format: 'es',
    banner: comment('welcome to imooc.com', 'this is a rollup test project'),
    footer: comment('powered by sam', 'copyright 2018')
  }],
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    json(),
    // 不支持es模块
    // uglify()
  ],
  // external: ['sam-test-data']
}