import axios, { AxiosInstance } from "axios";
import ArticleRepository from "./module/articlesRepository";

const $api = (() => {
  const instance: AxiosInstance = axios.create({
    baseURL: "https://conduit.productionready.io/api",
  });

  return {
    article: ArticleRepository(instance),
  };
})();

export default $api;
