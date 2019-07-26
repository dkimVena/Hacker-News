import React, { useState, useEffect } from 'react';

import { getArticleDetail } from '../../lib/api/hackerNews';
import LoadingImage from '../../images/loading.gif';
import PdfImage from '../../images/pdfImage.png';

import './Article.scss';

const Article = ({ articleId }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (localStorage.getItem(articleId)) {
      setArticle(JSON.parse(localStorage.getItem(articleId)));
    } else {
      getArticleDetail(articleId).then(res => {
        setArticle(res.data);
        if (res.data.id) {
          localStorage.setItem(res.data.id, JSON.stringify(res.data));
        }
      });
    }
  }, [articleId]);

  const handleError = () => {
    setArticle({
      ...article,
      image:
        'https://smithssanitationsupply.ca/wp-content/uploads/2018/06/noimage-1.png'
    });
  };

  return article ? (
    <div className="recent-articles">
      <div className="recent-articles-article">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <div className="recent-article-image-container">
            <img
              src={article.image !== 'pdf' ? article.image : PdfImage}
              alt={'Article Bacground'}
              onError={() => handleError()}
            />
          </div>

          <div className="article-detail">
            <span className="text-type">{article.type}</span>
            <h3 className="text-title">{article.title}</h3>
            <div className="article-detail-text multiline-ellipsis">
              {article.description}
            </div>
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

        <div className="text">
          <h3 className="text-title">{'Loading...'}</h3>
        </div>
      </div>
    </div>
  );
};

export default Article;
