import { checkResponse } from "./api";

const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export const getNews = (data, APIkey, previousWeekDate) => {
  return fetch(
    `${newsApiBaseUrl}?q=${data}&from=${previousWeekDate}&apiKey=${APIkey}`
  ).then(checkResponse);
};
