1. `npm init`
2. install dependencies
3. `mkdir src` under frontend directory
4. add favicon
5. under frontend>src> `touch index.html`
6. Create entrypoint for app: `touch frontend/src/index.js`
7. Create `webpack.config.js`

8. Create `.babelrc`

```
{
"presets": [
"@babel/preset-env",
"@babel/preset-react"
]
}
```

9. add babel presets to `package.json`

```
"babel": {
    "presets": [
      "babel-preset-react-app"
    ]
  }
```

10. Create ESLint configuration `touch .eslintrc`

```
{
  "parser": "@babel/eslint-parser",
  "rules": {},
  "extends": ["airbnb"]
}
```

and install popular config ```bash
npx install-peerdeps --dev eslint-config-airbnb

```

```
