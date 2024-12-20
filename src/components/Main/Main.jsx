import { useState } from "react";
import "./Main.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "./Preloader/Preloader";
import About from "../About/About";
import notFoundImage from "../../assets/not-found_v1.svg";

function Main({
  hasSearched,
  previousTopic,
  isLoading,
  handleSaveClick,
  searchResults,
  isLoggedIn,
}) {
  const notFound = (
    <>
      <div className="main__not-found">
        <div className="main__not-found-container">
          <img
            src={notFoundImage}
            alt="Not found image"
            className="main__not-found-image"
          />
          <h2 className="main__not-found-title">Nothing found</h2>
          <p className="main__not-found-description">
            Sorry, but nothing matched your search terms.
          </p>
        </div>
      </div>
    </>
  );

  return (
    <main>
      {searchResults && notFound}
      {hasSearched && (
        <NewsCardList
          previousTopic={previousTopic}
          handleSaveClick={handleSaveClick}
          isLoggedIn={isLoggedIn}
        />
      )}

      {isLoading && <Preloader />}
      <About />
    </main>
  );
}

export default Main;
