import axios from 'axios';

const newArticlesUrl = 'https://hacker-news.firebaseio.com/v0/newstories.json';
const articleUrl = 'https://hacker-news.firebaseio.com/v0/item/';

const getArticleDetail = async idList => {
  let result = [];
  for (let i = 0; i < 30; i++) {
    let article = await axios.get(`${articleUrl}${idList[i]}.json`);
    result.push(article.data);
  }

  fetch('http://info.cern.ch/hypertext/WWW/TheProject.html').then(asdf =>
    console.log(asdf)
  );

  return result;
};

export const getArticles = async () => {
  let idList = await axios.get(newArticlesUrl);
  let articles = await getArticleDetail(idList.data);
  return new Promise((resolve, reject) => resolve(articles));
};
