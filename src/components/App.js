import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { ArticleActions } from '../store/actionCreators';

const App = props => {
  useEffect(() => {
    ArticleActions.get_articles();
    ArticleActions.get_article('20507186');
  }, []);

  return <div />;
};

export default connect(({ article }) => ({
  article
}))(App);
