// Problem Description – callbackify(fn)
//
// You are required to write a function named callbackify that takes a function
// which returns a Promise.
// The function should return a new function that accepts a callback as its
// last argument.
// When the Promise resolves, the callback should be called with `(null, data)`.
// When the Promise rejects, the callback should be called with the error.

function callbackify(fn) {
  return function newcall(...args) {
    const callback = args[args.length - 1];
    const newArgs = args.slice(0, args.length - 1);
    fn(...newArgs)
      .then((data) => {
        callback(null, data);
      })
      .catch((error) => callback(error));
  };
}

module.exports = callbackify;
