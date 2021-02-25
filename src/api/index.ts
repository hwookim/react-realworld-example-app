import axios, { AxiosInstance } from "axios";
import ArticleRepository from "./module/articlesRepository";
import CommentRepository from "./module/commentRepository";
import UserRepository from "./module/userRepository";

const $api = (() => {
  const instance: AxiosInstance = axios.create({
    baseURL: "https://conduit.productionready.io/api",
  });

  return {
    article: ArticleRepository(instance),
    comment: CommentRepository(instance),
    user: UserRepository(instance),
  };
})();

export default $api;
