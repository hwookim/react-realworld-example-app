import axios, { AxiosInstance } from "axios";
import ArticleRepository from "./module/articlesRepository";
import CommentRepository from "./module/commentRepository";

const $api = (() => {
  const instance: AxiosInstance = axios.create({
    baseURL: "https://conduit.productionready.io/api",
  });

  return {
    article: ArticleRepository(instance),
    comment: CommentRepository(instance),
  };
})();

export default $api;
