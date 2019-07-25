import React from 'react';

import './ArticleHeader.scss';

const ArticleHeader = () => {
  return (
    <header className="article-header">
      <h3 className="article-header-logo">Wealthsimple</h3>
      <h1 className="h1-bold">Magazine</h1>
      <h2 className="subtitle">Stories and ideas from wealthsimple</h2>
    </header>
  );
};

export default ArticleHeader;
