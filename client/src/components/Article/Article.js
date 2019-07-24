import React, { useState, useEffect } from 'react';

// import { ArticleActions } from '../../store/actionCreators';
import { getArticleDetail } from '../../lib/api/hackerNews';
import './Article.scss';

const Article = ({ articleId }) => {
  const [article, setArticle] = useState(null);
  useEffect(() => {
    getArticleDetail(articleId).then(res => setArticle(res.data));
  }, [articleId]);
  console.log(article);
  return article ? (
    <React.Fragment>
      <div>Title: {article.title}</div>
      <div>Image: {article.image}</div>
      <div>Description: {article.description}</div>
    </React.Fragment>
  ) : null;
};

export default Article;
