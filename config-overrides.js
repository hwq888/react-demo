// const { override, fixBabelImports } = require('customize-cra');
// module.exports = override(
//     fixBabelImports('import', {
//         libraryName: 'antd-mobile',
//         style: 'css',
//     }),
// );

const { override, fixBabelImports, addPostcssPlugins} = require('customize-cra');
module.exports = override(
    // antb-mobile按需引入
    fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    style: 'css',
 }),
 // postcss-px2rem-exclude---（exclude:忽略文件）
 addPostcssPlugins([require("postcss-px2rem-exclude")({ remUnit: 75, exclude: /node_modules/i })])
);
