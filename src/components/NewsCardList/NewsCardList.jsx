import React, { useContext, useEffect, useState } from "react";
import "./NewsCardList.css";
import NewsCard from "./NewsCard/NewsCard";
import { CurrentSearchedItems } from "../../contexts/CurrentSearchedItems";

function NewsCardList({ previousTopic, handleSaveClick, isLoggedIn }) {
  const { newsItems } = React.useContext(CurrentSearchedItems);

  const [itemsToShow, setItemsToShow] = useState(3);
  const initialItems = 3;

  useEffect(() => {
    setItemsToShow(initialItems);
  }, [previousTopic]);

  const handleShowMore = () => {
    setItemsToShow(itemsToShow + 3);
  };

  return (
    <section className="news-cards">
      <div className="news-cards__content page__section">
        <h1 className="news-cards__title">Search results</h1>
        <ul className="news-cards__list">
          {newsItems.slice(0, itemsToShow).map((item, index) => {
            return (
              <NewsCard
                key={index}
                item={item}
                onSaveClick={handleSaveClick}
                isLoggedIn={isLoggedIn}
              />
            );
          })}
        </ul>
        {itemsToShow < newsItems.length && (
          <button className="news-cards__more" onClick={handleShowMore}>
            Show more
          </button>
        )}
      </div>
    </section>
  );
}

export default NewsCardList;
