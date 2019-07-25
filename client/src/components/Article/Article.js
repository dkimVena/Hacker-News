import React, { useState, useEffect } from 'react';

// import { ArticleActions } from '../../store/actionCreators';
import { getArticleDetail } from '../../lib/api/hackerNews';
import LoadingImage from '../../images/loading.gif';
import PdfImage from '../../images/pdfImage.png';
import './Article.scss';

const Article = ({ articleId }) => {
  const [article, setArticle] = useState(null);
  useEffect(() => {
    getArticleDetail(articleId).then(res => setArticle(res.data));
  }, [articleId]);
  return article ? (
    <div className="recent-articles">
      <div className="recent-articles-article">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <div className="recent-article-image-container">
            <img
              src={article.image !== 'pdf' ? article.image : PdfImage}
              alt={'Article Bacground'}
            />
          </div>

          <div className="article-detail">
            <span className="article-type">{article.type}</span>
            <h3 className="article-detail-title">{article.title}</h3>
            <p className="block-with-text">{article.description}</p>
          </div>
        </a>
      </div>
    </div>
  ) : (
    <div className="recent-articles">
      <div className="recent-articles-article">
        <div className="recent-article-image-container">
          <img src={LoadingImage} alt={'Article Bacground'} />
        </div>

        <div className="article-detail">
          <h3 className="article-detail-title">{'Loading...'}</h3>
        </div>
      </div>
    </div>
  );
};

export default Article;
