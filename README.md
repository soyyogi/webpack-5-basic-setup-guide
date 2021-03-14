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

## Step 3:
We will introduce webpack to resolve the error we got in last step.

In order to install **Webpack** as development dependency use the following command.
```
npm i -D webpack webpack-cli
```

## Step 4:
Create a new directory called **src** using
```
mkdir src
```

And move all JS files and index.html inside **src** directory using
```
mv *.js ./src

mv index.html ./src
```

## Step 5:
Run the following command to compile the project
```
npx webpack
```

**Or** add a ```build``` script in ```package.json```
```json
"scripts": {
    "build": "webpack"
}
```
and run the following command
```
npm run build
```

## Step 6:

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

## Step 7:
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

## Step 8:
To enable smooth **debugging** we are going to add a tool to provide source mapping by adding the following script inside ```webpack.config.js```
```js
module.exports = {
    
    ... // rest of the script
    
    // it goes at the end of the previous script we added in last step.
    devtool: 'source-map'
}
```

## Step 9:

<h2>Optional</h2>

Add watch flag to build script to enable webpack auto compile after each change.

```In package.json```

```json
"scripts": {
    "build": "webpack --watch"
}
```

## Step 10:

First let's install a plugin (as development dependency) that simplifies creation of HTML files to serve your bundles
```
npm i -D html-webpack-plugin
```

We are going to setup **entry point** and **output** for **javaScript** file and add a plugin for **HTML** template.

Add the following script inside ```webpack.config.js```
```js
// This goes at the top of the file.
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    // It goes at the beginning of the file
    entry: './src/index.js',
    
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack 5',
            filename: 'index.html'
        })
    ],

    ... // rest of the script
    
}
```

Now delete the old built files in **dist** directory and run the following command
```
npm run build
```

## Step 11:

Add a development server to enable **hot reloading** to keep the app running and to inject new versions of the files that you edited at runtime.

Add the following script inside ```webpack.config.js```
```js
module.exports = {
    
    ... // rest of the script
    
    // it goes at the end of the previous script we added in step 8.
    devServer: {
        contentBase: './dist'
    }
}
```

And install the following package as development dependency
```
npm i -D webpack-dev-server
```

Once the webpack-dev-server is installed, add a ```start``` script in ```package.json```
```json
"scripts": {
    "start": "webpack serve"
}
```

and run the following command to start the server
```
npm start
```

## Step 12:
Add a production env variable to run production build

Update ```build``` script and create new ```build-dev``` script in ```package.json```
```json
"scripts": {
    "build": "NODE_ENV=production webpack",
    "build-dev": "webpack --watch"
}
```

Add the following script inside ```webpack.config.js```
```js

// append this line before module.exports
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    
    // change mode value
    mode: mode,

    ... // rest of the script

}
```