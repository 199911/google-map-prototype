const _ = require('lodash');

// data structure of route: https://developers.google.com/maps/documentation/directions/intro#Routes
const calculateTotalDistance = (route) => {
  if (route.legs) {
    const totalDistance = _.reduce(route.legs, (distance, leg) => {
      if (leg.distance) {
        return distance + leg.distance.value;
      } else {
        return NaN;
      }
    }, 0)
    return totalDistance;
  }
}

module.exports = calculateTotalDistance;
