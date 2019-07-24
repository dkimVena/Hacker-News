const axios = require('axios');
const grabity = require('grabity');

module.exports.getArticles = async (req, res) => {
  const newArticlesUrl =
    'https://hacker-news.firebaseio.com/v0/newstories.json';

  let articles = await axios.get(newArticlesUrl);
  res.json(articles.data.slice(0, 60));
};

module.exports.getArticleDetail = async (req, res) => {
  const articleUrl = 'https://hacker-news.firebaseio.com/v0/item/';

  let { data } = await axios.get(`${articleUrl}${req.params.id}.json`);
  if (data.url) {
    if (data.url.slice(-3) === 'pdf') {
      data.image = 'pdf';
      data.description = 'This article is a PDF file';
    } else {
      try {
        let meta = await grabity.grabIt(data.url);
        data.image = meta.image;
        data.description = meta.description;
      } catch (error) {
        data.image = '';
        data.description = '';
      }
    }
  } else {
    data.image = '';
    data.description = '';
  }

  res.json(data);
};
