const assert = require('assert');
const validator = require('../src/validator.js');

let expect, actual;
let testCount = 0;

expect = true;

actual = validator.validateGetRequest({ id: '7baa07c7-39ff-4299-a0fa-32cae789bf11'});

testCount++;
assert.equal(expect, actual, `Fail test case ${testCount}`);

//

expect = false;

actual = validator.validateGetRequest({ id: '11982iouqwhiuc1p93rc98hugerwfhqwec3d'});

testCount++;
assert.equal(expect, actual, `Fail test case ${testCount}`);

//

expect = true;

actual = validator.validatePostRequest([
  ["22.372081", "114.107877"],
  ["22.284419", "114.159510"],
  ["22.326442", "114.167811"]
]);

testCount++;
assert.equal(expect, actual, `Fail test case ${testCount}`);


//

expect = true;

actual = validator.validatePostRequest([
  ["22.372081", "114.107877"],
  ["22.284419", "114.159510"]
]);

testCount++;
assert.equal(expect, actual, `Fail test case ${testCount}`);

//

expect = false;

actual = validator.validatePostRequest([
  ["22.326442", "114.167811"]
]);

testCount++;
assert.equal(expect, actual, `Fail test case ${testCount}`);

//

expect = false;

actual = validator.validatePostRequest([]);

testCount++;
assert.equal(expect, actual, `Fail test case ${testCount}`);

//

expect = false;

actual = validator.validatePostRequest([
  'Town Hall, Sydney, NSW',
  'Parramatta, NSW'
]);

testCount++;
assert.equal(expect, actual, `Fail test case ${testCount}`);
