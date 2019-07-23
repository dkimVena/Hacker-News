import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import article from './article';

export default combineReducers({
  article,
  pender: penderReducer
});
