import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { CurrentPageContext } from "../../contexts/CurrentPageContext";

import "./Navigation.css";

function Navigation({
  handleSigninClick,
  isLoggedIn,
  handleLogout,
  onMobileMenuClick,
  onMobileMenuClose,
  mobileOpen,
}) {
  const { userData } = React.useContext(CurrentUserContext);
  const { currentPage } = React.useContext(CurrentPageContext);

  const selectedLink = ({ isActive }) =>
    "nav__link " +
    (isActive && currentPage === "/saved-news" && !mobileOpen
      ? "nav__link_active-dark "
      : isActive
      ? "nav__link_active "
      : "") +
    (currentPage === "/saved-news" && !mobileOpen ? "nav__dark" : "");

  const handleMobileMenuClick = () => {
    onMobileMenuClick();
  };

  const handleDropdownClose = () => {
    onMobileMenuClose();
  };

  return (
    <div
      className={`nav__content ${
        currentPage === "/saved-news" && "nav__content-dark"
      } ${mobileOpen && "nav__mobile-nav"}`}
    >
      <nav className={`nav`}>
        <Link
          className={`nav__title ${
            currentPage === "/saved-news" && !mobileOpen ? "nav__dark" : ""
          }`}
          to="/"
        >
          NewsExplorer
        </Link>

        <div
          className={`nav__container ${isLoggedIn && "nav__content-loggedin"}`}
        >
          <NavLink className={selectedLink} to="/">
            Home
          </NavLink>

          {isLoggedIn ? (
            <>
              <NavLink className={selectedLink} to="/saved-news">
                Saved Articles
              </NavLink>

              <div
                className={`nav__user ${
                  currentPage === "/saved-news" && "nav__dark-border"
                }`}
              >
                <p
                  className={`nav__user_name ${
                    currentPage === "/saved-news" && "nav__dark"
                  }`}
                >
                  {userData.name}
                </p>
                <button
                  onClick={handleLogout}
                  className={
                    currentPage === "/saved-news"
                      ? "nav__dark-logout"
                      : "nav__user-logout"
                  }
                  type="button"
                />
              </div>
            </>
          ) : (
            <>
              <div className="nav__user">
                <button
                  type="button"
                  onClick={handleSigninClick}
                  className="nav__user-signin"
                >
                  Sign in
                </button>
              </div>
            </>
          )}
        </div>

        {!mobileOpen ? (
          <button
            className={
              currentPage === "/saved-news"
                ? "nav__mobile-button-dark"
                : "nav__mobile-button"
            }
            onClick={handleMobileMenuClick}
          />
        ) : (
          <>
            <button
              className={`nav__mobile-button-close`}
              onClick={handleDropdownClose}
            />
            <div className="nav__mobile">
              <div className="nav__mobile-menu">
                <NavLink className={selectedLink} to="/">
                  Home
                </NavLink>

                {isLoggedIn ? (
                  <>
                    <NavLink className={selectedLink} to="/saved-news">
                      Saved Articles
                    </NavLink>

                    <div
                      className={`nav__user ${
                        currentPage === "/saved-news" &&
                        !mobileOpen &&
                        "nav__dark-border"
                      }`}
                    >
                      <p
                        className={`nav__user_name ${
                          currentPage === "/saved-news" &&
                          !mobileOpen &&
                          "nav__dark"
                        }`}
                      >
                        {userData.name}
                      </p>
                      <button
                        onClick={handleLogout}
                        className={
                          currentPage === "/saved-news" && !mobileOpen
                            ? "nav__dark-logout"
                            : "nav__user-logout"
                        }
                        type="button"
                      />
                    </div>
                  </>
                ) : (
                  <div className="nav__user">
                    <button
                      type="button"
                      onClick={handleSigninClick}
                      className="nav__user-signin"
                    >
                      Sign in
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
