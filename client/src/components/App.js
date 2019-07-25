import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { ArticleActions } from '../store/actionCreators';
import ArticleHeader from './ArticleHeader';
import SubNav from './SubNav';
import ArticleList from './ArticleList';
import { GET_ARTICLES } from '../store/modules/article';

import './App.scss';

const App = ({ article, loading }) => {
  const [page, setPage] = useState(0);
  const [type, setType] = useState('even');
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    ArticleActions.get_articles(page, type);
  }, [page, type]);

  const loadPage = () => {
    if (loading) return;
    if (hasMore) {
      setPage(page + 1);
      if (page > 8) setHasMore(false);
    }
  };

  const handleSetType = changedType => {
    ArticleActions.clear_articles();
    setPage(0);
    setHasMore(true);
    setType(changedType);
  };

  return (
    <div className="container magazine-container">
      <ArticleHeader />
      <SubNav setType={handleSetType} currentType={type} />
      {article.articleList.length !== 0 && (
        <ArticleList
          hasMore={hasMore}
          loadMore={loadPage}
          articlesId={article.articleList}
        />
      )}
    </div>
  );
};

export default connect(({ article, pender }) => ({
  article,
  loading: pender.pending[GET_ARTICLES]
}))(App);
