module.exports = {
    "rules": {
        "no-console": 0,
        // best practices
        "eqeqeq": [
            2,
            "allow-null"
        ],
        "no-implicit-coercion": [
            2
        ],
        // style
        "indent": [
            0
        ],
        //"linebreak-style": [
        //    2,
        //    "unix"
        //],
        "quotes": [
            2,
            "double"
        ],
        "semi": [
            2,
            "always"
        ],
        // ECMAScript 6
        "arrow-spacing": [
            2
        ],
        "arrow-parens": [
            2
        ],
        "no-const-assign": [
            2
        ],
        "no-var": [
            2
        ],
        "no-unused-vars": [
            1, {
                "vars": "all",
                "args": "all", "argsIgnorePattern": "^_."
            }
        ],
        "object-shorthand": [
            2,
            "always"
        ],
        "prefer-arrow-callback": [
            1
        ],

        //REACT
        "jsx-quotes": 1,
        "react/forbid-prop-types": 1,
        "react/jsx-boolean-value": [1, "always"],
        "react/jsx-closing-bracket-location": 1,
        "react/jsx-curly-spacing": 1,
        "react/jsx-equals-spacing": 1,
        "react/jsx-handler-names": 1,
        "react/jsx-indent-props": 1,
        "react/jsx-indent": 1,
        "react/jsx-key": 1,
        "react/jsx-max-props-per-line": 1,
        "react/jsx-no-bind": 1,
        "react/jsx-no-duplicate-props": 1,
        "react/jsx-no-literals": 1,
        "react/jsx-no-undef": 1,
        "react/jsx-pascal-case": 1,
        "react/sort-prop-types": 1,
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/no-danger": 1,
        "react/no-deprecated": 1,
        "react/no-did-mount-set-state": 1,
        "react/no-did-update-set-state": 1,
        "react/no-direct-mutation-state": 1,
        "react/no-is-mounted": 1,
        "react/no-multi-comp": 1,
        "react/no-string-refs": 1,
        "react/no-unknown-property": 1,
        "react/prefer-es6-class": 1,
        "react/prop-types": 1,
        "react/react-in-jsx-scope": 1,
        "react/require-extension": 1,
        "react/self-closing-comp": 1,
        "react/sort-comp": 1,
        "react/wrap-multilines": 1
    },
    "extends": "eslint:recommended",
    "env": {
        "es6": true
    },
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },
    plugins: [
        "react"
    ]
};
