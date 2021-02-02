import React from "react";
import { Link } from "react-router-dom";

import sstitle from "../images/sstitle.png";

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
              <div className="o-header__top-column o-header__top-column--left navSearchWrapper">
                <button
                  onClick={() => props.setShowSearchBar(!props.showSearchBar)}
                >
                  <div
                    className="o-header__top-link o-header__top-link--search"
                    aria-controls="o-header-search"
                    title="Open search bar"
                  >
                    <span className="o-header__top-link-label">
                      Open search bar
                    </span>
                  </div>
                </button>
              </div>

              <div className="o-header__top-column o-header__top-column--center">
                <Link to={`/`}>
                  <img
                    className="schoolspidertitle"
                    src={sstitle}
                    alt="School Spider Title"
                  />
                </Link>
              </div>

              <div className="o-header__top-column o-header__top-column--right navHomeWrapper">
                <Link to={`/`}>
                  <div
                    className="o-header__top-link navHomeButton"
                    aria-label="Go Home"
                  >
                    <span className="o-header navHomeText o-teaser__heading">
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
