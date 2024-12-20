import React, { useState, useContext } from "react";
import "./SavedNewsHeader.css";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedNewsHeader({
  handleSigninClick,
  handleLogout,
  isLoggedIn,
  savedItems,
  onMobileMenuClick,
  onMobileMenuClose,
  mobileOpen,
}) {
  const { userData } = React.useContext(CurrentUserContext);

  const savedArticles = savedItems.length;

  const capitalizeFirstLetter = (word) =>
    (word && String(word[0]).toUpperCase() + String(word).slice(1)) || "";

  const savedKeywords = savedItems.map((item) =>
    capitalizeFirstLetter(item.keyword)
  );

  return (
    <>
      <Navigation
        handleSigninClick={handleSigninClick}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        onMobileMenuClick={onMobileMenuClick}
        onMobileMenuClose={onMobileMenuClose}
        mobileOpen={mobileOpen}
      />

      <header className="saved-header">
        <div className="saved__content page__section">
          <p className="saved__title">Saved articles</p>
          <h2 className="saved__description">
            {userData.name}, you have {savedArticles} saved articles
          </h2>
          <p className="saved__keywords">
            By keywords:{" "}
            <span className="saved__keywords-bold">
              {savedKeywords.length <= 2
                ? savedKeywords.join(", ")
                : `${savedKeywords[0]}, ${savedKeywords[1]} and ${
                    savedKeywords.length - 2
                  } others`}
            </span>
          </p>
        </div>
      </header>
    </>
  );
}

export default SavedNewsHeader;
