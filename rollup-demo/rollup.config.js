
export default {
  // input表示入口文件的路径（老版本为entry，已经废弃）
  input: './src/main.js',
  // output表示输出文件的内容，它允许传入一个对象或一个数组，当为数组时，依次输出多个文件，它包含以下内容：
  output: [{
    // output.file：输出文件的路径（老版本为dest，已经废弃）
    file: './dist/index-cjs.js',
    // output.format：输出文件的格式
    format: 'cjs',
    // output.banner：文件头部添加的内容
    banner: '// welcome to imooc.com',
    // output.footer：文件末尾添加的内容
    footer: '// powered by sam'
  }, {
    file: './dist/index-es.js',
    format: 'es',
    banner: '// welcome to imooc.com',
    footer: '// powered by sam'
  }]
}