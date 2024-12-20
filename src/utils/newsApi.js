import { checkResponse } from "./api";

export const getNews = (data, APIkey, previousWeekDate) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${data}&from=${previousWeekDate}&apiKey=${APIkey}`
  ).then(checkResponse);
};
