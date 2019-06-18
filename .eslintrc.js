module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        // Default eslint config from Ready Frontend Boilerplate
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error': 'off',
        'require-jsdoc': [2, {
            require: {
                FunctionDeclaration: false,
                MethodDefinition: false,
                ClassDeclaration: false
            }
        }],
        'no-multiple-empty-lines': [2, {
            max: 5
        }],
        'comma-dangle': 0,
        'keyword-spacing': 0,
        'max-len': [2, {
            code: 200,
            tabWidth: 4
        }],
        'arrow-parens': ['error', 'as-needed'],

        // Vue eslint config
        'indent': 'off',
        'vue/script-indent': ['warn', 4, {
            'baseIndent': 1
        }],
    }
}
