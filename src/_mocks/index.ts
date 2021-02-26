import { Article, Comment, Profile } from "../type";

const ARTICLE: Article = {
  slug: "how-to-train-your-dragon",
  title: "How to train your dragon",
  description: "Ever wonder how?",
  body: "It takes a Jacobian",
  tagList: ["dragons", "training"],
  createdAt: "2016-02-18T03:22:56.637Z",
  updatedAt: "2016-02-18T03:48:35.824Z",
  favorited: false,
  favoritesCount: 0,
  author: {
    username: "jake",
    bio: "I work at statefarm",
    image: "https://i.stack.imgur.com/xHWG8.jpg",
    following: false,
  },
};

const ARTICLES_RESPONSE: {
  articles: Article[];
  articlesCount: number;
} = {
  articles: [
    {
      slug: "how-to-train-your-dragon",
      title: "How to train your dragon",
      description: "Ever wonder how?",
      body: "It takes a Jacobian",
      tagList: ["dragons", "training"],
      createdAt: "2016-02-18T03:22:56.637Z",
      updatedAt: "2016-02-18T03:48:35.824Z",
      favorited: false,
      favoritesCount: 0,
      author: {
        username: "jake",
        bio: "I work at statefarm",
        image: "https://i.stack.imgur.com/xHWG8.jpg",
        following: false,
      },
    },
    {
      slug: "how-to-train-your-dragon-2",
      title: "How to train your dragon 2",
      description: "So toothless",
      body: "It a dragon",
      tagList: ["dragons", "training"],
      createdAt: "2016-02-18T03:22:56.637Z",
      updatedAt: "2016-02-18T03:48:35.824Z",
      favorited: false,
      favoritesCount: 0,
      author: {
        username: "jake",
        bio: "I work at statefarm",
        image: "https://i.stack.imgur.com/xHWG8.jpg",
        following: false,
      },
    },
  ],
  articlesCount: 2,
};

const COMMENT: Comment = {
  id: 1,
  createdAt: "2016-02-18T03:22:56.637Z",
  updatedAt: "2016-02-18T03:22:56.637Z",
  body: "It takes a Jacobian",
  author: {
    username: "jake",
    bio: "I work at statefarm",
    image: "https://i.stack.imgur.com/xHWG8.jpg",
    following: false,
  },
};

const ARTICLE_TAGS: string[] = ["reactjs", "angularjs"];

const PROFILE: Profile = {
  username: "jake",
  bio: "I work at statefarm",
  image: "https://static.productionready.io/images/smiley-cyrus.jpg",
  following: false,
};

export { ARTICLE, ARTICLES_RESPONSE, ARTICLE_TAGS, COMMENT, PROFILE };
