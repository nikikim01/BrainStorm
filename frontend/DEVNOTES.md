# Init React App w/o Create-React-App

1. `npm init`
2. install dependencies
3. `mkdir src` under frontend directory
4. add favicon
5. under frontend>src> `touch index.html`
6. Create entrypoint for app: `touch frontend/src/index.js`
7. Create `webpack.config.js`

8. Create `.babelrc`

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

9. add babel presets to `package.json`

```json
"babel": {
    "presets": [
      "babel-preset-react-app"
    ]
  }
```

10. Create ESLint configuration `touch .eslintrc`

```json
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
  "root": true // this line assures only this ESLint config applies to this project
}
```

and install popular config

```bash
npx install-peerdeps --dev eslint-config-airbnb

```

11. add

## Relay Dependencies

- react-relay
  - integrate react for relay - connects React components to Relay, providing data-fetching capabilities
- relay-runtime:
  - core runtime for Relay to provide the runtime for executing Relay queries and mutations

## Redux Dependencies

    - redux: predictable state container for JS apps to manage global state of the app
    - react-redux: official React bindings for redux to allow React components to interact with the Redux store
    - redux-thunk: middleware that allows the writing of action creators that return a fn instead of an action and enables handling of async actions in Redux

## TailwindCSS Dependencies

    - tailwindcss: a utility-first CSS framework
    - postcss: transforms CSS with JS plugins and used by TailwindCSS to process CSS
    - autoprefixer: a PostCSS plugin to parse CSS and add vendor prefixes to CSS rules; ensures CSS compatibility with different browsers

# Debugging and Sourcemaps

- added in `debugger;` to pause execution on the browser w/ dev tools open

# trial

- (trying)[https://dev.to/rebeccapeltz/react-18-react-router-v6-sidebar-navigation-and-a-sandpack-component-5c02] out (Tailwind)[https://tailwindcss.com/docs/installation] for quicker prettier UI

# future reference

If you want to deploy your app that's using react-router-dom to github.io, use the HashRouter instead of BrowserRouter.

```js
    import { Routes, Route, HashRouter } from "react-router-dom";
    <HashRouter>
    <Routes>
    ....
    <Routes>
    </HashRouter>
```
