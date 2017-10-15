const Promise = require('bluebird')
const _ = require('lodash');
const getShortestPathAsync = require('./getShortestPathAsync.js');

const getShortestDrivingRouteAsync = (locations) => {
  const origin = locations[0];
  const dropOffLocations = locations.slice(1);
  let promises = [];
  // Try to make all drop off point destination, use Google Map API to find the shortest path
  for (let i = 0; i < dropOffLocations.length; i++) {
    const destination = dropOffLocations[i];
    const waypoints = _.clone(dropOffLocations);
    // Remove the destination location from waypoints
    waypoints.splice(i, 1);
    promises.push(getShortestPathAsync(origin, destination, waypoints));
  }
  return Promise
    .all(promises)
    .then((results) => {
      return _.reduce(results, function(shortest, result) {
        if (shortest && result['total_distance'] > shortest['total_distance']) {
          return shortest;
        } else {
          return result;
        }
      }, null);
    });
}

module.exports = {};