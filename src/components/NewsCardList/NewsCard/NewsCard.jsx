import React, { useState, useContext, useEffect } from "react";
import "./NewsCard.css";
import { SavedArticlesContext } from "../../../contexts/SavedArticlesContext";
import { CurrentPageContext } from "../../../contexts/CurrentPageContext";

function NewsCard({ item, onSaveClick, isLoggedIn, onDeleteClick }) {
  const { currentPage } = React.useContext(CurrentPageContext);
  const { savedItems } = React.useContext(SavedArticlesContext);

  const [showBanner, setShowBanner] = useState(false);
  const [likeClick, setLikeClick] = useState(false);

  const publishedDate = new Date(item.publishedAt).toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleSaveClick = () => {
    !isLoggedIn ? setShowBanner(true) : (onSaveClick(item), setLikeClick(true));
    likeClick && setLikeClick(false);
  };

  const handleDeleteClick = (item) => {
    onDeleteClick(item);
  };

  const saveButton = likeClick
    ? "card__save-button_active"
    : "card__save-button";

  useEffect(() => {
    savedItems.some((savedItem) => {
      savedItem.url === item.url;
    }) && setLikeClick(true);
  }, []);

  return (
    <li className="card">
      <img src={item.urlToImage} alt={item.title} className="card__image" />
      {currentPage === "/saved-news" ? (
        <>
          <div className="card__save-keyword">{item.keyword}</div>
          <div className="card__save-wrapper">
            {showBanner && (
              <div className="card__save-banner">Remove from saved</div>
            )}
            <div className="card__save-container">
              <button
                type="button"
                className="card__delete"
                onMouseEnter={() => {
                  setShowBanner(true);
                }}
                onMouseLeave={() => {
                  setShowBanner(false);
                }}
                onClick={handleDeleteClick}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="card__save-wrapper">
          {showBanner && (
            <div className="card__save-banner">Sign in to save articles</div>
          )}
          <div className="card__save-container">
            <button
              type="button"
              className={saveButton}
              onClick={handleSaveClick}
            />
          </div>
        </div>
      )}

      <div className="card__container">
        <p className="card__date">{publishedDate}</p>
        <a href={item.url} className="card__title">
          {item.title}
        </a>
        <p className="card__description">{item.description}</p>
        <p className="card__source">{item.source.name}</p>
      </div>
    </li>
  );
}

export default NewsCard;
