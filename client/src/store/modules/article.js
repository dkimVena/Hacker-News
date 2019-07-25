import { createAction, handleActions } from 'redux-actions';
import * as HackerNewsAPI from '../../lib/api/hackerNews';
import { applyPenders } from '../../lib/common';

export const GET_ARTICLES = 'article/GET_ARTICLES';
export const CLEAR_ARTICLES = 'article/CLEAR_ARTICLES';

export const get_articles = createAction(
  GET_ARTICLES,
  HackerNewsAPI.getArticles
);

export const clear_articles = createAction(CLEAR_ARTICLES);

const initialState = {
  articleList: []
};

const reducer = handleActions(
  {
    [CLEAR_ARTICLES]: state => {
      return {
        ...state,
        articleList: []
      };
    }
  },
  initialState
);

export default applyPenders(reducer, [
  {
    type: GET_ARTICLES,
    onSuccess: (state, { payload: { data } }) => {
      return {
        ...state,
        articleList: [...state.articleList, ...data],
        loading: false
      };
    }
  }
]);
