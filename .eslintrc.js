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
  plugins: ['tailwindcss'],
  extends: ['next', 'next/core-web-vitals', 'eslint:recommende', 'plugin:tailwindcss/recommended', 'prettier'],
  rules: {
    //
    'no-extra-semi': 'warn',
    //
    quotes: ['warn', 'single'],
    //
    'react/react-in-jsx-scope': 'off',
    //
    'no-unused-vars': 'off',
    //
    '@typescript-eslint/no-unused-vars': ['error'],
    // React hooks
    // hooks の書き方に準拠しないとエラーにする
    'react-hooks/rules-of-hooks': 'error',
    // 依存の配列が正しく記述されていない場合ワーニングにする
    'react-hooks/exhaustive-deps': 'warn',
    // tailwindcss
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/migration-from-tailwind-2': 'warn',
    'tailwindcss/no-arbitrary-value': 'off',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error'
  }
}
