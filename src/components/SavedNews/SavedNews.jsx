import React, { useState } from "react";
import "./SavedNews.css";
import NewsCard from "../NewsCardList/NewsCard/NewsCard";

function SavedNews({ handleSaveClick, handleDeleteArticle, savedItems }) {
  const [itemsToShow, setItemsToShow] = useState(6);

  const handleShowMore = () => {
    setItemsToShow(itemsToShow + 3);
  };

  return (
    <section className="news-cards">
      <div className="news-cards__content page__section">
        <ul className="news-cards__list">
          {savedItems.slice(0, itemsToShow).map((item, index) => {
            return (
              <NewsCard
                key={index}
                item={item}
                onSaveClick={handleSaveClick}
                onDeleteClick={handleDeleteArticle}
              />
            );
          })}
        </ul>
        {itemsToShow < savedItems.length && (
          <button className="news-cards__more" onClick={handleShowMore}>
            Show more
          </button>
        )}
      </div>
    </section>
  );
}

export default SavedNews;
