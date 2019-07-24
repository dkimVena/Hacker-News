import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { ArticleActions } from '../store/actionCreators';
import Article from './Article';

const App = ({ article }) => {
  useEffect(() => {
    ArticleActions.get_articles();
  }, []);

  const renderArticles = () => {
    return article.articleList.map(article => {
      return <Article articleId={article} />;
    });
  };

  return <div>{article.articleList.length !== 0 && renderArticles()}</div>;
};

export default connect(({ article }) => ({
  article
}))(App);
