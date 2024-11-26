export default {
  root: true,
  env: {
    browser: true, // 支持浏览器环境的检测
    es2021: true, // 支持es2021语法的检测
    node: true, // 支持node环境的检测
  },
  extends: [
    '@nuxt/eslint-config',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest', // 解析文件的时候使用最新的ecmaVersion
    sourceType: 'module', // 文件是ES6模块规范
  },
  plugins: ['vue'],
  rules: {
    camelcase: 2, // 驼峰
    indent: [2, 2], // 缩进2个空格
    quotes: ['error', 'single'], // 强制使用一致的反勾号、双引号或单引号
    'no-alert': 'off', // 不允许使用“alert”、“confirm”和“prompt”`
    'no-console': 'off', // 不允许使用`console`
    'no-undef': 'off', // 不允许未使用变量
    'no-else-return': 'error', // 禁止 if 语句中有 return 之后有 else
    'no-unused-expressions': 'off', // 不允许三元表达式等
    '@typescript-eslint/no-unused-expressions': 'off', // 不允许三元表达式等
    'unused-imports/no-unused-vars': 'off', // 不允许未使用的变量
    'node/prefer-global/process': 'off', // 禁止不必要的引入 `process` 或 `require("process")`
    'jsdoc/require-returns-description': 'off', // 要求“@return”标记具有“description”值。
  },
};
