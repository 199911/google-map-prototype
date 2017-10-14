const config = require('../config.js');
const googleMapsClient = require('@google/maps').createClient({
  key: config.apiKey,
  Promise: require('bluebird')
});
const constructPath = require('./constructPath.js');
const calculateTotalDistance = require('./calculateTotalDistance.js');
const calculateTotalTime = require('./calculateTotalTime.js');

const getShortestPathAsync = (origin, destination, waypoints) => {
  const params = {
    origin,
    destination,
    waypoints,
    mode: 'driving',
    optimize: true,
  };
  return googleMapsClient
    .directions(params)
    .asPromise()
    .then((response) => {
      if (response.json) {
        const result = response.json;
        // All status codes: https://developers.google.com/maps/documentation/directions/intro#StatusCodes
        switch (result.status) {
          case 'OK':
            if (result.routes && result.routes.length > 0) {
              const route = result.routes[0];
              return {
                path: constructPath(origin, destination, waypoints, route),
                total_distance: calculateTotalDistance(route),
                total_time: calculateTotalTime(route)
              };
            } else {
              throw new Error('No route');
            }
          case 'NOT_FOUND':
            throw new Error('At least one of the locations specified in the request\'s origin, destination, or waypoints could not be geocoded.');
          case 'ZERO_RESULTS':
            throw new Error('No route could be found between the origin and destination');
          case 'MAX_WAYPOINTS_EXCEEDED':
            throw new Error('Too many locations were provided in the request');
          case 'MAX_ROUTE_LENGTH_EXCEEDED':
            throw new Error('Requested route is too long and cannot be processed');
          case 'INVALID_REQUEST':
            throw new Error('The provided request was invalid');
          case 'OVER_QUERY_LIMIT':
            throw new Error('Too many requests');
          case 'REQUEST_DENIED':
            throw new Error('Service denied');
          default:
            throw new Error('Unhandled API error');
        }
      } else {
        throw new Error('Unknown API error');
      }
    });
  // Cal time and distance, return
}

module.exports = getShortestPathAsync;
