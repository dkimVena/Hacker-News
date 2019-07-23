const axios = require('axios');
const grabity = require('grabity');

module.exports.getArticles = async (req, res) => {
  const newArticlesUrl =
    'https://hacker-news.firebaseio.com/v0/newstories.json';
  const articleUrl = 'https://hacker-news.firebaseio.com/v0/item/';

  const getArticleDetail = async idList => {
    let result = [];
    for (let i = 0; i < 30; i++) {
      let { data } = await axios.get(`${articleUrl}${idList[i]}.json`);
      if (data.url) {
        if (data.url.slice(-3) === 'pdf') {
          data.image = 'pdf';
          data.description = 'This article is a PDF file';
        } else {
          let meta = await grabity.grabIt(data.url);
          data.iamge = meta.image;
          data.description = meta.description;
        }
      } else {
        data.image = '';
        data.description = '';
      }
      result.push(data);
    }

    return result;
  };

  let idList = await axios.get(newArticlesUrl);
  let articles = await getArticleDetail(idList.data);
  res.json(articles);
};
