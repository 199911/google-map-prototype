const _ = require('lodash');

// data structure of route: https://developers.google.com/maps/documentation/directions/intro#Routes
const constructPath = (origin, destination, waypoints, route) => {
  const path = [origin];
  if (waypoints && waypoints.length > 0) {
    _.each(route['waypoint_order'], (order) => {
      path.push(waypoints[order]);
    });
  }
  path.push(destination);
  return path;
}

module.exports = constructPath;
