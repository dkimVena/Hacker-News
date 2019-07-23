import { createAction, handleActions } from 'redux-actions';
import * as HackerNewsAPI from '../../lib/api/hackerNews';
import { applyPenders } from '../../lib/common';

const GET_ARTICLES = 'article/GET_ARTICLES';
const GET_ARTICLE = 'article/GET_ARTICLE';

export const get_articles = createAction(
  GET_ARTICLES,
  HackerNewsAPI.getArticles
);
export const get_article = createAction(GET_ARTICLE, HackerNewsAPI.getArticle);

const initialState = {
  articleList: [],
  loading: true
};

const reducer = handleActions({}, initialState);

export default applyPenders(reducer, [
  {
    type: GET_ARTICLES,
    onSuccess: (state, { payload: { data } }) => {
      return {
        ...state,
        articleList: data
      };
    }
  },
  {
    type: GET_ARTICLE,
    onSuccess: (state, { payload: { data } }) => {
      return {
        ...state
      };
    }
  }
]);
