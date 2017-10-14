const assert = require('assert');
const calculateTotalDistance = require('../src/calculateTotalDistance.js');

let expect, actual;
let testCount = 0;

expect = 0;

actual = calculateTotalDistance(
  {
    legs: []
  }
);

testCount++;
assert.equal(expect, actual, `Fail test case ${testCount}`);

//

expect = 8334;

actual = calculateTotalDistance(
  {
    legs: [
      {
        distance: { value: 8334 }
      }
    ]
  }
);

testCount++;
assert.equal(expect, actual, `Fail test case ${testCount}`);

//

expect = 10;

actual = calculateTotalDistance(
  {
    legs: [
      {
        distance: { value: 1 }
      },
      {
        distance: { value: 4 }
      },
      {
        distance: { value: 2 }
      },
      {
        distance: { value: 3 }
      }
    ]
  }
);

testCount++;
assert.equal(expect, actual, `Fail test case ${testCount}`);
