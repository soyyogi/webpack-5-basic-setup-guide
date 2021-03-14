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

## Step 7:

Now we will install some more packages to provide backwards javascript compatibility. Run the following commands in your terminal
```
npm i @babel/core @babel/preset-env babel-loader
```

Let's create a babel config file ```.babelrc```
```
touch .babelrc
```

And set presets inside ```.babelrc```
```json
{
    "presets": ["@babel/preset-env"]
}
```

## Step 8:
Now we are going to create **webpack configuration** file.

Run the following command
```
touch webpack.config.js
```

Once ```webpack.config.js``` is created, add the following script to test **javascript** files using *babel-loader* and set mode to development.
```js
module.exports = {
    
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    // without additional settings, this will refer to .babelrc
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
```

## Step 9:
To enable smooth **debugging** we are going to add a tool to provide source mapping by adding the following script inside ```webpack.config.js```
```js
module.exports = {
    
    ...,
    
    // it goes at the end of the previous script we added in last step.
    devtool: 'source-map'
}
```