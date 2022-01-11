module.exports = {
  root: true,
  env: {
    //
    browser: true,
    //
    es2021: true
  },
  //
  parserOptions: {
    //
    tsconfigRootDir: './',
    //
    project: ['./tsconfig.json']
  },
  extends: ['next', 'next/core-web-vitals', 'prettier']
}
