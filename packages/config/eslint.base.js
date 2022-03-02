module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/strongly-recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'warn',
    'vue/no-unused-components': 'warn',
    'dot-notation': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'prettier/prettier': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/no-v-for-template-key-on-child': 'off',
    'vue/no-v-html': 'off',
  },
}
