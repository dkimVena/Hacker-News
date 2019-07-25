import React from 'react';

import './SubNav.scss';

const SubNav = ({ setType, currentType }) => {
  return (
    <nav className="sub-nav">
      <ul className="util-row util-row-align-center">
        <li
          className={`sub-nav-link ${currentType === 'even' ? 'active' : ''}`}
          onClick={() => setType('even')}
        >
          Even Numbered Articles
        </li>
        <li
          className={`sub-nav-link ${currentType === 'odd' ? 'active' : ''}`}
          onClick={() => setType('odd')}
        >
          Odd Numbered Articles
        </li>
      </ul>
    </nav>
  );
};

export default SubNav;
