const _ = require('lodash');

// data structure of route: https://developers.google.com/maps/documentation/directions/intro#Routes
const calculateTotalTime = (route) => {
  if (route.legs) {
    const totalTime = _.reduce(route.legs, (duration, leg) => {
      if (leg.duration) {
        return duration + leg.duration.value;
      } else {
        return NaN;
      }
    }, 0)
    return totalTime;
  }
}

module.exports = calculateTotalTime;
