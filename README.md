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

## Step 4:
We will introduce webpack to resolve the error we got in last step.

In order to install **Webpack** as development dependency use the following command.
```
npm i -D webpack webpack-cli
```

## Step 5:
Create a new directory called **src** using
```
mkdir src
```

And move all JS files inside **src** directory using
```
mv *.js ./src
```

## Step 6:
Run the following command to compile the project
```
npx webpack
```

**Or** add a ```build``` script in ```package.json```
```json
"scripts": {
    ...,
    "build": "webpack"
}
```
and run the following command
```
npm run build
```