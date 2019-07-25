import React, { useState, useEffect } from 'react';
// import Masonry from 'react-masonry-component';
import Masonry from 'react-masonry-css';
import Article from '../Article';
import { getArticleDetail } from '../../lib/api/hackerNews';
import Spinner from '../Spinner';
import useInfiniteScroll from '../useInfiniteScroll';

import './ArticleList.scss';

// const masonryOptions = {
//   horizontalOrder: true,
//   gutter: 20
// };

const breakpointColumnsObj = {
  default: 2,
  620: 1
};

const ArticleList = ({ articlesId, loadMore, hasMore }) => {
  const [article, setArticle] = useState(null);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  useEffect(() => {
    getArticleDetail(articlesId[0]).then(res => setArticle(res.data));
  }, [articlesId]);

  function fetchMoreListItems() {
    hasMore && loadMore();
    setIsFetching(false);
  }

  const renderArticles = articlesId
    .slice(1)
    .map(articleId => <Article key={articleId} articleId={articleId} />);

  if (article)
    return (
      <main className="article-container">
        <div className="featured-article">
          <a href={article.url}>
            <img src={article.image} alt={'Article Background'} />
            <div className="article-detail featured-article-detail">
              <span className="article-type">{article.type}</span>
              <h3 className="article-detail-title">{article.title}</h3>
              <p className="block-with-text">{article.description}</p>
            </div>
          </a>
        </div>
        <section className="type-recent-articles">
          <Masonry
            className={'masonry-grid'}
            breakpointCols={breakpointColumnsObj}
            columnClassName="masonry-grid-column"
          >
            {renderArticles}
          </Masonry>
        </section>
        {hasMore && (
          <div className="load-more-articles">
            <div href="#" className="button load-more-articles-button">
              More posts
            </div>
          </div>
        )}
      </main>
    );
  else return <Spinner />;
};

export default ArticleList;
