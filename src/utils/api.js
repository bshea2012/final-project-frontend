export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const getItems = () => {
  return new Promise((resolve, reject) =>
    resolve([
      {
        id: "65f7368dfb74bd6a92114c85", // I just generated this at random from a mongodb id generator website
        title: "Some news article",
        url: "https://www.bbc.com/news/articles/cze391y17z7o",
        publishedAt: "2024-11-21T21:22:30Z",
        description:
          "content content content content content content content content content content content content ",
        urlToImage:
          "https://media.npr.org/assets/img/2024/11/21/img-20241121-wa0023_pod_wide-16282064bee18f91e1448eba71f0a6c392a2ec58.jpg?s=1400&c=100&f=jpeg",
        source: {
          name: "NPR",
        },
        keyword: "here",
      },
      {
        id: "6745469596d02fbd6c30942b",
        title: "Some news article",
        url: "https://www.bbc.com/news/articles/cze391y17z7o",
        publishedAt: "2024-11-21T21:22:30Z",
        description:
          "content content content content content content content content content content content content ",
        urlToImage:
          "https://media.npr.org/assets/img/2024/11/21/img-20241121-wa0023_pod_wide-16282064bee18f91e1448eba71f0a6c392a2ec58.jpg?s=1400&c=100&f=jpeg",
        source: {
          name: "NPR",
        },
        keyword: "here1",
      },
      {
        id: "67454aea20441c4bc2a47c0d",
        title: "Some news article",
        url: "https://www.bbc.com/news/articles/cze391y17z7o",
        publishedAt: "2024-11-21T21:22:30Z",
        description:
          "content content content content content content content content content content content content ",
        urlToImage:
          "https://media.npr.org/assets/img/2024/11/21/img-20241121-wa0023_pod_wide-16282064bee18f91e1448eba71f0a6c392a2ec58.jpg?s=1400&c=100&f=jpeg",
        source: {
          name: "NPR",
        },
        keyword: "here2",
      },
      {
        id: "65f7368dfb74bd6a92114c85", // I just generated this at random from a mongodb id generator website
        title: "Some news article",
        url: "https://www.bbc.com/news/articles/cze391y17z7o",
        publishedAt: "2024-11-21T21:22:30Z",
        description:
          "content content content content content content content content content content content content ",
        urlToImage:
          "https://media.npr.org/assets/img/2024/11/21/img-20241121-wa0023_pod_wide-16282064bee18f91e1448eba71f0a6c392a2ec58.jpg?s=1400&c=100&f=jpeg",
        source: {
          name: "NPR",
        },
        keyword: "here3",
      },
      {
        id: "6745469596d02fbd6c30942b",
        title: "Some news article",
        url: "https://www.bbc.com/news/articles/cze391y17z7o",
        publishedAt: "2024-11-21T21:22:30Z",
        description:
          "content content content content content content content content content content content content ",
        urlToImage:
          "https://media.npr.org/assets/img/2024/11/21/img-20241121-wa0023_pod_wide-16282064bee18f91e1448eba71f0a6c392a2ec58.jpg?s=1400&c=100&f=jpeg",
        source: {
          name: "NPR",
        },
        keyword: "here4",
      },
      {
        id: "67454aea20441c4bc2a47c0d",
        title: "Some news article",
        url: "https://www.bbc.com/news/articles/cze391y17z7o",
        publishedAt: "2024-11-21T21:22:30Z",
        description:
          "content content content content content content content content content content content content ",
        urlToImage:
          "https://media.npr.org/assets/img/2024/11/21/img-20241121-wa0023_pod_wide-16282064bee18f91e1448eba71f0a6c392a2ec58.jpg?s=1400&c=100&f=jpeg",
        source: {
          name: "NPR",
        },
        keyword: "here5",
      },
      {
        id: "6745469596d02fbd6c30942b",
        title: "Some news article",
        url: "https://www.bbc.com/news/articles/cze391y17z7o",
        publishedAt: "2024-11-21T21:22:30Z",
        description:
          "content content content content content content content content content content content content ",
        urlToImage:
          "https://media.npr.org/assets/img/2024/11/21/img-20241121-wa0023_pod_wide-16282064bee18f91e1448eba71f0a6c392a2ec58.jpg?s=1400&c=100&f=jpeg",
        source: {
          name: "NPR",
        },
        keyword: "here6",
      },
      {
        id: "67454aea20441c4bc2a47c0d",
        title: "Some news article",
        url: "https://www.bbc.com/news/articles/cze391y17z7o",
        publishedAt: "2024-11-21T21:22:30Z",
        description:
          "content content content content content content content content content content content content ",
        urlToImage:
          "https://media.npr.org/assets/img/2024/11/21/img-20241121-wa0023_pod_wide-16282064bee18f91e1448eba71f0a6c392a2ec58.jpg?s=1400&c=100&f=jpeg",
        source: {
          name: "NPR",
        },
        keyword: "here7",
      },
      // and have however many you want to show on the saved-news page
    ])
  );
};

const saveArticle = (article) => {
  // article is a result from the NewsAPI
  return new Promise((resolve, reject) => {
    resolve({
      id: "65f7371e7bce9e7d331b11a0", // another one made up from the generator
      url: article.url, // Use whatever properties the newsAPI gives you, I just made these up
      title: article.title,
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
      description: article.description,
      source: article.source,
      keyword: article.keyword,
    });
  });
};

const deleteSavedArticle = () => {
  return new Promise((res, rej) => {
    const response = {
      ok: true,
      status: 200,
      statusMessage: "Ok",
    };
    res(response);
  });
};

export { getItems, saveArticle, deleteSavedArticle };
