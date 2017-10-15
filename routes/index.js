const express = require('express');
const router = express.Router();
const routeRequestHandler = require('../src/routeRequestHandler.js');
const validator = require('../src/validator.js');
const uuidv4 = require('uuid/v4');

router.get('/route/:id', function(req, res, next) {
  if (validator.validateGetRequest(req.params)) {
    const uuid = req.params.id;
    routeRequestHandler
      .pocessGetRequestAsync(uuid)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json({
          status: 'failure',
          error: 'Database Error'
        });
      });
  } else {
    res.json({
      status: 'failure',
      error: 'Invalid parameters'
    });
  }
});

router.post('/route', function(req, res, next) {
  if (validator.validatePostRequest(req.body)) {
    const uuid = uuidv4();
    routeRequestHandler
      .pocessPostRequestAsync(uuid, req.body);
    res.json({
      token: uuid
    });
  } else {
    res.json({
      error: 'Invalid parameters'
    });
  }
});

module.exports = router;
