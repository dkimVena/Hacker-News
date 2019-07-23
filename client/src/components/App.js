import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { ArticleActions } from '../store/actionCreators';

const App = ({ article }) => {
  useEffect(() => {
    ArticleActions.get_articles();
  }, []);

  const renderArticleList = () => {
    console.log(article);
    return article.articleList.map(article => <li>{article.title}</li>);
  };

  return <div>{!article.loading && renderArticleList()}</div>;
};

export default connect(({ article }) => ({
  article
}))(App);
