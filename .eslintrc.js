export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb"
    ],
    "parser" : "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "jsx-a11y/label-has-associated-control" : "off",
        "jsx-a11y/anchor-is-valid" : "off",
        "no-console" : "off",
        "no-underscore-dangle" : "off",
        "react/forbid-prop-types" : "off",
        "react/jsx-filename-extension" : "off",
        "react/jsx-one-expression-per-line" : "off",
        "object-curly-newline" : "off",
        "linebreak-style" : 0,
        "no-param-reassign" : "off"
    }
}
