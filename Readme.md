
## What's the problem?
DefinePlugin doesn't inject variable into the bundle.js file, if it is used in require() call, preceded my runtime variable.
[Issue nr #65602](https://github.com/webpack/webpack/issues/5602)

### Setup & run
1. Clone repo
2. ```npm install```
3. ```npm run webpack```
(it should work flawlessly.)
4. Run: `node dist/bundle.js`
**You should receive an error**:
```
var file = __webpack_require__(1)("./" + name + __FILE_FORMAT__);
ReferenceError: __FILE_FORMAT__ is not defined...
```

If you check `bundle.js` you can clearly see that `__FILE_FORMAT__` was not injected, but it was used in the bundling process (`./dist/assets` contain only files with configured file format).
