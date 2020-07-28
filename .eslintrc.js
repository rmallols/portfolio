module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": [
        "airbnb-typescript-prettier"
    ],
    "plugins": [
        "prettier"
    ],
    "rules": {
        "no-use-before-define": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
        "react/no-unescaped-entities": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/ban-ts-comment": 0,
        "jsx-a11y/label-has-associated-control": 0,
    }
}