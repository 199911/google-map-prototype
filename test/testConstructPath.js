const assert = require('assert');
const constructPath = require('../src/constructPath.js');

let expect, actual;
let testCount = 0;

expect = JSON.stringify(
  [
    ["40.769832", "-73.960704"],
    ["22.372081", "114.107877"],
    ["22.284419", "114.159510"],
    ["22.326442", "114.167811"],
    ["40.768138", "-73.958885"],
  ]
);

actual = JSON.stringify(constructPath(
  ["40.769832", "-73.960704"],
  ["40.768138", "-73.958885"],
  [
    ["22.372081", "114.107877"],
    ["22.284419", "114.159510"],
    ["22.326442", "114.167811"]
  ],
  {
    waypoint_order: [0,1,2]
  }
));

testCount++;
assert.equal(expect, actual, `Fail test case ${testCount}`);

//

expect = JSON.stringify(
  [
    ["40.769832", "-73.960704"],
    ["22.326442", "114.167811"],
    ["22.284419", "114.159510"],
    ["22.372081", "114.107877"],
    ["40.768138", "-73.958885"],
  ]
);

actual = JSON.stringify(constructPath(
  ["40.769832", "-73.960704"],
  ["40.768138", "-73.958885"],
  [
    ["22.372081", "114.107877"],
    ["22.284419", "114.159510"],
    ["22.326442", "114.167811"]
  ],
  {
    waypoint_order: [2,1,0]
  }
));

testCount++;
assert.equal(expect, actual, `Fail test case ${testCount}`);

//

expect = JSON.stringify(
  [
    ["40.769832", "-73.960704"],
    ["22.284419", "114.159510"],
    ["22.326442", "114.167811"],
    ["22.372081", "114.107877"],
    ["40.768138", "-73.958885"],
  ]
);

actual = JSON.stringify(constructPath(
  ["40.769832", "-73.960704"],
  ["40.768138", "-73.958885"],
  [
    ["22.372081", "114.107877"],
    ["22.284419", "114.159510"],
    ["22.326442", "114.167811"]
  ],
  {
    waypoint_order: [1,2,0]
  }
));

testCount++;
assert.equal(expect, actual, `Fail test case ${testCount}`);

//

expect = JSON.stringify(
  [
    ["40.769832", "-73.960704"],
    ["40.768138", "-73.958885"],
  ]
);

actual = JSON.stringify(constructPath(
  ["40.769832", "-73.960704"],
  ["40.768138", "-73.958885"],
  [],
  {
    waypoint_order: [1,2,0]
  }
));

testCount++;
assert.equal(expect, actual, `Fail test case ${testCount}: empty waypoint`);

//

expect = JSON.stringify(
  [
    ["40.769832", "-73.960704"],
    ["40.768138", "-73.958885"],
  ]
);

actual = JSON.stringify(constructPath(
  ["40.769832", "-73.960704"],
  ["40.768138", "-73.958885"],
  undefined,
  {
    waypoint_order: [1,2,0]
  }
));

testCount++;
assert.equal(expect, actual, `Fail test case ${testCount}: undefined waypoint`);
