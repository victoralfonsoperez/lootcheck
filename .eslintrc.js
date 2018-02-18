module.exports = {
    "extends": "airbnb",
    "rules": {
        "semi": ["warn", "never"],
        "quotes": ["error", "single"],
        "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    }
}