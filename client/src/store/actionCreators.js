import { bindActionCreators } from 'redux';

import * as articleActions from './modules/article';

import store from './index';

const { dispatch } = store;

export const ArticleActions = bindActionCreators(articleActions, dispatch);
