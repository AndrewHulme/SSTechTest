import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div>
      <header
        class="o-header o-header--simple"
        data-o-component="o-header"
        data-o-header--no-js
      >
        <div class="o-header__row o-header__top">
          <div class="o-header__container">
            <div class="o-header__top-wrapper">
              <div class="o-header__top-column o-header__top-column--left">
                <button
                  onClick={() => props.setShowSearchBar(!props.showSearchBar)}
                >
                  <a
                    class="o-header__top-link o-header__top-link--search"
                    aria-controls="o-header-search"
                    title="Open search bar"
                  >
                    <span class="o-header__top-link-label">
                      Open search bar
                    </span>
                  </a>
                </button>
              </div>

              <div class="o-header__top-column o-header__top-column--center">
                <Link to={`/`}>
                  <a
                    class="o-header__top-logo"
                    title="Go to Financial Times homepage"
                  >
                    <span class="o-header__visually-hidden">
                      Financial Times
                    </span>
                  </a>
                </Link>
              </div>

              <div class="o-header__top-column o-header__top-column--right">
                <Link to={`/`}>
                  <a
                    class="o-header__top-link"
                    href="/myft"
                    aria-label="My F T"
                  >
                    <span class="o-header navSchoolName o-teaser__heading">
                      HOME
                    </span>
                  </a>
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
