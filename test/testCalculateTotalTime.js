const assert = require('assert');
const calculateTotalTime = require('../src/calculateTotalTime.js');

let expect, actual;
let testCount = 0;

expect = 0;

actual = calculateTotalTime(
  {
    legs: []
  }
);

testCount++;
assert.equal(expect, actual, `Fail test case ${testCount}`);

//

expect = 8334;

actual = calculateTotalTime(
  {
    legs: [
      {
        duration: { value: 8334 }
      }
    ]
  }
);

testCount++;
assert.equal(expect, actual, `Fail test case ${testCount}`);

//

expect = 10;

actual = calculateTotalTime(
  {
    legs: [
      {
        duration: { value: 1 }
      },
      {
        duration: { value: 4 }
      },
      {
        duration: { value: 2 }
      },
      {
        duration: { value: 3 }
      }
    ]
  }
);

testCount++;
assert.equal(expect, actual, `Fail test case ${testCount}`);
