import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearchRequest }) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    !keyword || keyword.trim() === ""
      ? (setError("Please enter a keyword"), setKeyword(""))
      : (setError(""), onSearchRequest(keyword));
  };

  return (
    <div className="search-form">
      <div className="search-form__container">
        <p className="search-form__title">What's going on in the world?</p>
        <p className="search-form__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="search-form__bar" onSubmit={handleSubmit}>
          <input
            type="text"
            minLength="1"
            className="search-form__bar-input"
            placeholder="News topic"
            name="topic"
            value={keyword}
            onChange={handleChange}
          />
          <button className="search-form__bar-submit" type="submit">
            Search
          </button>
        </form>
        {error && <p className="search-form__error">Please enter a keyword</p>}
      </div>
    </div>
  );
}

export default SearchForm;
