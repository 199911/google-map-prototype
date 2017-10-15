const _ = require('lodash');

const validateGetRequest = (params) => {
  const id = params.id;
  if (!typeof id === 'string' ) {
    return false;
  }
  var reg = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
  return reg.test(id);
}

const validatePostRequest = (body) => {
  if (!_.isArray(body) || body.length < 2) {
    return false;
  }
  for (let location of body) {
    if (!validateLocation(location)) {
      return false;
    }
  }
  return true;
}

const isFloat = (val) => {
    var reg = /^-?\d+(?:[.,]\d*?)?$/;
    if (!reg.test(val)) {
      return false;
    }
    if ( isNaN(parseFloat(val)) ) {
      return false;
    }
    return true;
}

const validateLocation = (location) => {
  if (!_.isArray(location) || location.length !== 2) {
    return false;
  } else {
    return isFloat(location[0]) && isFloat(location[1]);
  }
};

module.exports = {
  validateGetRequest,
  validatePostRequest
};