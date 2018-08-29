## is-mailto

Simple function to test if an url is a valid "mailto:".

### Install:

```
$ npm i is-mailto
```
```
$ yarn add is-mailto
```


### Example:

```js
import isMailTo from 'is-mailto';

const string = 'mailto:test@test.com';
console.log(isMailTo(string)) // true

const string = 'test@test';
console.log(isMailTo(string)) // false because it's not an valid email and not contain "mailto:"

```
