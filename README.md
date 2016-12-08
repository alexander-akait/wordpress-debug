# wordpress-debug

[![NPM version](https://img.shields.io/npm/v/wordpress-debug.svg)](https://www.npmjs.org/package/wordpress-debug) 
[![Travis Build Status](https://img.shields.io/travis/itgalaxy/wordpress-debug/master.svg?label=build)](https://travis-ci.org/itgalaxy/wordpress-debug) 
[![dependencies Status](https://david-dm.org/itgalaxy/wordpress-debug/status.svg)](https://david-dm.org/itgalaxy/wordpress-debug) 
[![devDependencies Status](https://david-dm.org/itgalaxy/wordpress-debug/dev-status.svg)](https://david-dm.org/itgalaxy/wordpress-debug?type=dev)

Enable or disable Wordpress debug.

## Install

```shell
npm install wordpress-debug --save-dev
```

## Usage

```js
const wordpressDebug = require('wordpress-debug');

wordpressDebug('path/to/wp-config.php'); // Enable debug
wordpressDebug('path/to/wp-config.php', true); // Enable debug
wordpressDebug('path/to/wp-config.php', false); // Disable debug
```

## API

### wordpressDebug(wpConfigPath, debug)

Returns a `Promise`.

#### wpConfigPath

Type: `string`

Required: `true`

Path to `wp-config.php`.

#### debug

Type: `boolean`

Default: `true`

Required: `false`

Enable or disable debug.

## Contribution

Feel free to push your code if you agree with publishing under the MIT license.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
