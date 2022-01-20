module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    eqeqeq: 2,
    'no-use-before-define': [
      2,
      {
        functions: false,
      },
    ],
    'no-undef': 2,
    'no-unused-vars': 1,
    'brace-style': 2,
    'no-mixed-spaces-and-tabs': 2,
    'key-spacing': 2,
    'comma-spacing': 2,
    'array-bracket-spacing': 2,
    'space-in-parens': 2,
    'no-trailing-spaces': 2,
    'comma-dangle': 0,
    'comma-style': 2,
    'space-infix-ops': 2,
    'keyword-spacing': 2,
    'space-before-blocks': 2,
    'spaced-comment': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
      },
    ],
    complexity: 2,
    'max-depth': [
      2,
      {
        max: 3,
      },
    ],
    'default-case': 0,
    'dot-notation': 2,
    'no-alert': 2,
    'no-empty-function': 0,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-implicit-coercion': 2,
    'no-multi-spaces': 2,
    'no-useless-return': 2,
    'global-require': 1,
    camelcase: 0,
    'computed-property-spacing': 2,
    'consistent-this': 2,
    'func-call-spacing': 2,
    'func-names': 0,
    'func-name-matching': 2,
    'func-style': [
      2,
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'line-comment-position': 2,
    'linebreak-style': 2,
    'lines-around-comment': 2,
    'max-statements-per-line': 2,
    'no-lonely-if': 2,
    'prefer-const': 2,
    'no-mixed-operators': 2,
    'no-multi-assign': 2,
    'no-unneeded-ternary': 2,
    'object-property-newline': [
      2,
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'operator-linebreak': 2,
    'quote-props': [2, 'as-needed'],
    quotes: [2, 'single'],
    semi: 0,
    'semi-spacing': 2,
    'one-var': [2, 'never'],
    'eol-last': 2,
    'newline-after-var': 0,
    'no-var': 2,
    '@typescript-eslint/no-empty-function': 0,
    'no-case-declarations': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
}
