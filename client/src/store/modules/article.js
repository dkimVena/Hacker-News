import { createAction, handleActions } from 'redux-actions';
import * as HackerNewsAPI from '../../lib/api/hackerNews';
import { applyPenders } from '../../lib/common';

const GET_ARTICLES = 'article/GET_ARTICLES';

export const get_articles = createAction(
  GET_ARTICLES,
  HackerNewsAPI.getArticles
);

const initialState = {
  articleList: [],
  loading: true
};

const reducer = handleActions({}, initialState);

export default applyPenders(reducer, [
  {
    type: GET_ARTICLES,
    onSuccess: (state, { payload }) => {
      console.log(payload);
      return {
        ...state,
        articleList: [...state.articleList, ...payload],
        loading: false
      };
    }
  }
]);
