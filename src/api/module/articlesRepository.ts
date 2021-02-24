import { AxiosInstance } from "axios";
import { Article } from "../../type";

export interface ArticlesRequest {
  tag?: string;
  author?: string;
  favorited?: string;
  limit?: number;
  offset?: number;
}

export interface ArticlesResponse {
  articles: Article[];
  articlesCount: number;
}

export interface ArticleResponse {
  article: Article;
}

export interface ArticleTagsResponse {
  tags: string[];
}

export default function ArticleRepository(axios: AxiosInstance) {
  const getArticles = (
    params: ArticlesRequest = {}
  ): Promise<ArticlesResponse> => {
    return axios.get("/articles", { params }).then(({ data }) => data);
  };

  const getArticle = (slug: Article["slug"]): Promise<ArticleResponse> =>
    axios.get(`/articles/${slug}`).then(({ data }) => data);

  const getTags = (): Promise<ArticleTagsResponse> =>
    axios.get("/tags").then(({ data }) => data);

  return {
    getArticles,
    getArticle,
    getTags,
  };
}
