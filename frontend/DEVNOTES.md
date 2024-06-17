# Init React App w/o Create-React-App

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
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "rules": {
    "no-debugger": "off",
    "no-console": "off",
    "no-unused-vars": "warn",
    "react/prop-types": "warn"
  },
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "root": true
}

```

and install popular config

```bash
npx install-peerdeps --dev eslint-config-airbnb

```

11. add

# Debugging and Sourcemaps

- added in `debugger;` to pause execution on the browser w/ dev tools open
