import { createAction, handleActions } from 'redux-actions';
import * as HackerNewsAPI from '../../lib/api/hackerNews';
import { applyPenders } from '../../lib/common';

const GET_ARTICLES = 'article/GET_ARTICLES';
const GET_ARTICLE_DETAIL = 'article/GET_ARTICLE_DETAIL';

export const get_articles = createAction(
  GET_ARTICLES,
  HackerNewsAPI.getArticles
);

export const get_article_detail = createAction(
  GET_ARTICLE_DETAIL,
  HackerNewsAPI.getArticleDetail
);

const initialState = {
  articleList: [],
  articleDetailList: [],
  loading: true
};

const reducer = handleActions({}, initialState);

export default applyPenders(reducer, [
  {
    type: GET_ARTICLES,
    onSuccess: (state, { payload: { data } }) => {
      console.log(data);
      return {
        ...state,
        articleList: [...state.articleList, ...data],
        loading: false
      };
    }
  },
  {
    type: GET_ARTICLE_DETAIL,
    onSuccess: (state, { payload: { data } }) => {
      console.log(data);
      return {
        ...state,
        articleDetailList: [...state.articleDetailList, ...data],
        loading: false
      };
    }
  }
]);
