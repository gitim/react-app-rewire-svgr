# react-app-rewire-svgr

Add [SVGR](https://github.com/smooth-code/svgr) loader to your [create-react-app](https://github.com/facebookincubator/create-react-app) via [react-app-rewired](https://github.com/timarney/react-app-rewired).

## Installation

```
yarn add --dev react-app-rewire-svgr
```

OR

```
npm install --save-dev react-app-rewire-svgr
```

## Usage
In your react-app-rewired configuration:
```js
/* config-overrides.js */

const rewireSVGR = require('react-app-rewire-svgr');

module.exports = function override(config, env) {
    // ...
    config = rewireSVGR(config, env);
    // ...
    return config;
}
```
In your React application:
```js
import Star from './star.svg'

const App = () => (
  <div>
    <Star />
  </div>
)
```
