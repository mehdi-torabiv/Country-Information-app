module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    indent: 'off',
    // eslint-disable-next-line quote-props
    'quotes': [2, 'single', { 'avoidEscape': true }]
  }
}
