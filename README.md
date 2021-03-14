# Webpack 5 Setup

## Step 1:

Create index.html and index.js files using 
```
touch index.html index.js
```

Initialize NPM 
```
npm init -y
```

## Step 2:

Link index.js file to index.html file using
```html
<script src="index.js"></script>
```

## Step 3:

Create JS modules and import them in index.js file using ES6 Modules.

For Example:

Create wizard.js file using 
```
touch wizard.js
```

```In wizard.js```

```js
export const wizard = 'Fredo';
```

```In index.js```

```js
import { wizard } from './wizard';

console.log(wizard);
```

Using this module will throw this error
```js
Uncaught SyntaxError: Cannot use import statement outside a module
```
