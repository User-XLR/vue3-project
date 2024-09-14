import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } }
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    ignores: ['**/node_modules/**', '.config/*', 'dist/*', 'public/*']
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/multi-word-component-names': 0
    }
  }
]
