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

## Start Implementing Relay

- basic (installations)[https://relay.dev/docs/v11.0.0/getting-started/step-by-step-guide/#step-3-when-to-use-relay] after (setup)[https://relay.dev/docs/v11.0.0/getting-started/installation-and-setup/]
- create (fetchGraphQL helper)[https://relay.dev/docs/v11.0.0/getting-started/step-by-step-guide/#22-a-fetchgraphql-helper]
- `bash npm install -g get-graphql-schema`
- `bash npx get-graphql-schema http://localhost:4000/graphql > schema.graphql`
- needed to install Watchman: a Meta Inc. tool for watching changes in the filesystem
- make sure schema.graphql encoding is UTF-8 not VSCode default of UTF-16

## (Configure Relay Compiler)[https://relay.dev/docs/v11.0.0/getting-started/step-by-step-guide/#41-configure-relay-compiler]

1.

```json
{
  ...
  "scripts": {
    ...
    "start": "npm run relay && {OG start script}>",
    "build": "npm run relay && {OG build script}",
    "relay": "relay-compiler --schema schema.graphql --src ./src/ --watch"
    ...
  },
  ...
}
```

## (Configure Relay Runtime)[https://relay.dev/docs/v11.0.0/getting-started/step-by-step-guide/#42-configure-relay-runtime]

- a Relay `environment` encapsulates how we talk to our server (a Relay `Network`) with a cache of data retrieved from that server

# Debugging PhotoFeedQuery

uncommented the following bc restarting mongodb service fixed issue??

1. needed to enable CORS on the backend server with `bash npm install cors`
2. configure CORS in backend server

- needed to run services as admin and manually start mongodb

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
