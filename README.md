# Clean for webpack
A webpack plugin to remove/clean your build folder(s) before building 

This is a modified version, you can find original clean-webpack-plugin from [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin], but original version has a problem that I can not specify deleting targets as you want. please checkout source code if you are intrested in.

## Installation
```
npm i clean2-webpack-plugin --save
```

## Example Webpack Config

``` javascript
var CleanFolders = require('clean2-webpack-plugin');

module.exports = {
  plugins: [
    new CleanFolders(['dist', 'build'],'you must specify absolute context path')
  ]
}
```


## Parameters

#### new CleanFolders(paths , context)

* `paths` -  An array of string paths to clean
* `context` - **You have to specify your context root just like webpack.config.js context value**


## License
http://www.opensource.org/licenses/mit-license.php
