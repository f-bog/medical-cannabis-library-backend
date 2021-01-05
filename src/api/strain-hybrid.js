const express = require('express');
const axios = require('axios');

const router = express.Router();
const BASE_URL = `http://strainapi.evanbusse.com/${process.env.REACT_APP_SECRET_KEY}/strains/search/race/hybrid`;

router.get('/', async (req, res, next) => {
  try {
    // 1 make request to strains api
    const { data } = await axios.get(`${BASE_URL}`);

    // 2 respond to this request with data from strain api
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
