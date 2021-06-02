/*
 * @Description: 
 * @Author: zhangjing
 * @Date: 2021-06-02 13:18:16
 * @LastEditors: zhangjing
 */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'rgb(0,82,204)','@font-size-base':'16px' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};