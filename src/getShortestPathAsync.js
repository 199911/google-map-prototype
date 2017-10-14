const config = require('../config.js');
const googleMapsClient = require('@google/maps').createClient({
  key: config.apiKey,
  Promise: require('bluebird')
});

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
        // TODO: handle all status in https://developers.google.com/maps/documentation/directions/intro#StatusCodes
        const result = response.json;
        switch (result.status) {
          case 'OK':
            // TODO: extract data we need from the result
            return result;
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
