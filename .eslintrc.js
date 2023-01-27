module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    //vue
    //'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    //'plugin:vue/vue3-recommended', --제일엄격한 권장코드규칙
    //js
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: { 
      "vue/html-closing-bracket-newline": ["error", {
        "singleline": "never",
        "multiline": "never"
      }],
      "vue/html-self-closing": ["error", {
        "html": {
          "void": "always",
          "normal": "never",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }]
    
  }
}