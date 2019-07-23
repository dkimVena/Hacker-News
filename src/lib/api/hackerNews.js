import axios from 'axios';

const newArticlesUrl = 'https://hacker-news.firebaseio.com/v0/newstories.json';
const articleUrl = 'https://hacker-news.firebaseio.com/v0/item/';

export const getArticles = () => axios.get(newArticlesUrl);

export const getArticle = articleId =>
  axios.get(`${articleUrl}${articleId}.json`);
