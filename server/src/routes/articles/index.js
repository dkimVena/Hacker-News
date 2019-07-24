const router = require('express').Router();

const controller = require('./controller');

/**
 * get list
 */
router.get('/', controller.getArticles);

router.get('/:id', controller.getArticleDetail);

module.exports = router;
