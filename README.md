# Logger
This is an easy-to-use logging library created by me, acecow, to serve the backend in our project. Below you will find brief documentation for my library.

# Docs
Before use, you must do a little setup. To set up the library, you must write this command:
```js
loggear.setUp("log.txt", true)
```
`log.txt` - file where logs will be stored. If the specified file does not exist, a file with the same name will be automatically created. You may also see an obscure argument with a value of `true`. With this argument
you can define whether to show the date or not. In order to be shown, as I wrote above, it must be `true`, in order not to be shown - `false`. If the value is not set to `true` or `false`, but, for example, a string, then the value will be automatically set to `false`. Let's look at an example:
```js
const loggear = require('loggear')

loggear.setUp("log.txt", true)

loggear.log("test")
loggear.error("test")
loggear.info("test")
```
The result of executing this code will be like this:
```
[LOG] 2022-12-22 16:46:34 --- test
[ERROR] 2022-12-22 16:46:34 --- test
[INFO] 2022-12-22 16:46:34 --- test
```
`log.txt:`
```
Logs
[LOG] 2022-12-22 16:47:56 --- test
[ERROR] 2022-12-22 16:47:56 --- test
[INFO] 2022-12-22 16:47:56 --- test
```
