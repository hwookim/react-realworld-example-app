import { Article } from "../type";

const APP_NAME = "Real World";

const EMPTY_ARTICLE: Article = {
  slug: "",
  title: "",
  description: "",
  body: "",
  tagList: [""],
  createdAt: "",
  updatedAt: "",
  favorited: false,
  favoritesCount: 0,
  author: {
    username: "",
    bio: "",
    image: "",
    following: false,
  },
};

const NO_ARTICLES_MESSAGE = "No articles are here... yet.";

export { APP_NAME, EMPTY_ARTICLE, NO_ARTICLES_MESSAGE };
