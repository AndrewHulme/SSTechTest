import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div>
      <header
        className="o-header o-header--simple"
        data-o-component="o-header"
        data-o-header--no-js
      >
        <div className="o-header__row o-header__top">
          <div className="o-header__container">
            <div className="o-header__top-wrapper">
              <div className="o-header__top-column o-header__top-column--left">
                <button
                  onClick={() => props.setShowSearchBar(!props.showSearchBar)}
                >
                  <a
                    className="o-header__top-link o-header__top-link--search"
                    aria-controls="o-header-search"
                    title="Open search bar"
                  >
                    <span className="o-header__top-link-label">
                      Open search bar
                    </span>
                  </a>
                </button>
              </div>

              <div className="o-header__top-column o-header__top-column--center">
                <Link to={`/`}>
                  <div
                    className="o-header__top-logo"
                    title="Go to Financial Times homepage"
                  >
                    <span className="o-header__visually-hidden">
                      Financial Times
                    </span>
                  </div>
                </Link>
              </div>

              <div className="o-header__top-column o-header__top-column--right">
                <Link to={`/`}>
                  <div
                    className="o-header__top-link"
                    href="/myft"
                    aria-label="My F T"
                  >
                    <span className="o-header navSchoolName o-teaser__heading">
                      HOME
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
