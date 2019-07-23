const router = require('express').Router();

const controller = require('./controller');

/**
 * get list
 */
router.get('/', controller.getArticles);

module.exports = router;
