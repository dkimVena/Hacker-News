import axios from 'axios';

export const getArticles = (page, type) => {
  return axios.get('/api/articles', {
    params: {
      page,
      type
    }
  });
};

export const getArticleDetail = articleId => {
  return axios.get(`/api/articles/${articleId}`);
};
