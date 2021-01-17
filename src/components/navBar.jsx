import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
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
                <a
                  href="#o-header-search"
                  class="o-header__top-link o-header__top-link--search"
                  aria-controls="o-header-search"
                  title="Open search bar"
                >
                  <span class="o-header__top-link-label">Open search bar</span>
                </a>
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

        {/* <div
          id="o-header-search"
          class="o-header__row o-header__search o--if-js"
          role="search"
          data-o-header-search
        >
          <div class="o-header__container">
            <form
              class="o-header__search-form"
              action="/search"
              role="search"
              aria-label="Site search"
            >
              <label
                class="o-header__visually-hidden"
                for="o-header-search-term-js"
              >
                Search the <abbr title="Financial Times">FT</abbr>
              </label>
              <input
                class="o-header__search-term"
                id="o-header-search-term-js"
                name="q"
                type="text"
                placeholder="Search the FT"
              />
              <button class="o-header__search-submit" type="submit">
                Search
              </button>
              <button
                class="o-header__search-close"
                type="button"
                aria-controls="o-header-search"
                title="Close search bar"
              >
                <span class="o-header__visually-hidden">Close search bar</span>
              </button>
            </form>
          </div>
        </div> */}
      </header>

      {/* <div
        class="o-header__drawer"
        id="o-header-drawer"
        role="navigation"
        aria-label="Drawer menu"
        data-o-header-drawer
        data-o-header-drawer--no-js
      >
        <div class="o-header__drawer-inner">
          <div class="o-header__drawer-tools">
            <button
              type="button"
              class="o-header__drawer-tools-close"
              aria-controls="o-header-drawer"
              title="Close drawer menu"
            >
              <span class="o-header__visually-hidden">Close drawer menu</span>
            </button>
          </div>

          <div class="o-header__drawer-search">
            <form
              class="o-header__drawer-search-form"
              action="/search"
              role="search"
              aria-label="Site search"
            >
              <label
                class="o-header__visually-hidden"
                for="o-header-drawer-search-term"
              >
                Search the <abbr title="Financial Times">FT</abbr>
              </label>
              <input
                class="o-header__drawer-search-term"
                id="o-header-drawer-search-term"
                name="q"
                type="text"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                placeholder="Search the FT"
              />
              <button class="o-header__drawer-search-submit" type="submit">
                <span class="o-header__visually-hidden">Search</span>
              </button>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default NavBar;
