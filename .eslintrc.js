module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:eslint-comments/recommended',
        'prettier/@typescript-eslint',
        // 'plugin:prettier/recommended',
    ],
    rules: {
        'import/no-named-as-default-member': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-var-requires': 'off',
        'react/prop-types': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        "react/jsx-indent-props": "off",
       
        // "indent": [ "error", 4],
        // "indent": ["error", 4],
        // "react/jsx-indent": ["error", 4],
        // "react/jsx-indent-props": ["error", 4],
        'prettier/prettier': ['off', { singleQuote: true }]
    },
}
