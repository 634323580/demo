module.exports = [{
  file: './dist/index-cjs.js',
  format: 'cjs',
  banner: '// welcome to imooc.com',
  footer: '// powered by sam'
}, {
  file: './dist/index-es.js',
  format: 'es',
  banner: '// welcome to imooc.com',
  footer: '// powered by sam',
}, {
  file: './dist/index-amd.js',
  format: 'amd',
  banner: '// welcome to imooc.com',
  footer: '// powered by sam',
}, {
  file: './dist/index-umd.js',
  format: 'umd',
  name: 'sam-umd', // 指定文件名称
  banner: '// welcome to imooc.com',
  footer: '// powered by sam',
}]

// 作者：Sam
// 链接：https://www.imooc.com/article/262083
// 来源：慕课网
// 本文首次发布于慕课网 ，转载请注明出处，谢谢合作