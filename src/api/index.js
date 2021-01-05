const express = require('express');

const emojis = require('./emojis');
const sativa = require('./strain-sativa');
const hybrid = require('./strain-hybrid');
const indica = require('./strain-indica');
const description = require('./strain-description');
const flavors = require('./strain-flavors');
const effects = require('./strain-effects');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);

// routes for type search
router.use('/strain-sativa', sativa);
router.use('/strain-indica', indica);
router.use('/strain-hybrid', hybrid);
// routes for strain screen
router.use('/strain-description', description);
router.use('/strain-effects', effects);
router.use('/strain-flavors', flavors);
module.exports = router;
