import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <header className="header js-header header--sticky">
      <div className="container util-row util-row-vertical-center">
        <h3 className="article-header-logo">Wealthsimple</h3>
        <img
          src="https://www.wealthsimple.com/assets/magazine/images/header/logo_small-6dccf727ddc595c19f73cecef3069936.svg"
          alt="Wealthsimple"
          className="article-header-logo-small"
        />

        <nav className="header-nav util-block-md">
          <ul className="util-row util-row-align-right util-row-align-center">
            <li>
              <a
                className="header-nav-link active"
                href="https://gook-hacker-news.herokuapp.com/"
              >
                Magazine
              </a>
            </li>

            <li>
              <a
                href="https://github.com/goginim/Hacker-News"
                className="cta cta--www-init-onboarding header-nav-link button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start investing
              </a>
            </li>
          </ul>
        </nav>

        <div className="navigation util-hide-md">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />
          <label for="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a
                  href="https://gook-hacker-news.herokuapp.com/"
                  className="navigation__link"
                >
                  Magazine
                </a>
              </li>
              <li className="navigation__item">
                <a
                  href="https://github.com/goginim/Hacker-News"
                  className="navigation__link"
                >
                  Start Investing
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
