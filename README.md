# JavaScript Division by Zero Bug

This repository demonstrates a common bug in JavaScript: incorrect handling of division by zero. The `myFunction` in `bug.js` attempts to perform division but returns 0 if either input is 0. This is incorrect; division by zero should be handled more appropriately. The solution in `bugSolution.js` corrects this issue.

## Bug
The original function fails to handle cases where the divisor is zero. This can lead to unexpected behavior and potentially crash the application.

## Solution
The solution implements proper error handling using a `try...catch` block, throwing an error when encountering division by zero.  The `bugSolution.js` file shows a more robust approach.