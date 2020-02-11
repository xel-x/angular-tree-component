import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import autoExternal from 'rollup-plugin-auto-external';

export default {
  format: 'umd',
  moduleName: 'angular-tree-component',
  plugins: [
    nodeResolve({ jsnext: true, main: true, module: true }),
    commonjs(),
    autoExternal(),
  ],
  sourceMap: true,
  external: [
    '@angular/core',
    '@angular/common',
    'mobx-angular/dist/lib'
  ],
  onwarn: function (warning) {
    const skip_codes = [
      'THIS_IS_UNDEFINED',
      'MISSING_GLOBAL_NAME'
  ];
  if ( skip_codes.indexOf(warning.code) != -1 ) return;
    console.error(warning);
  }
};
