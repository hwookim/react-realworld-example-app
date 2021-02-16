import { AxiosInstance } from "axios";
import { Article } from "../../type";

export interface ArticleListRequest {
  tag?: string;
  author?: string;
  favorited?: string;
  limit?: number;
  offset?: number;
}

export interface ArticleListResponse {
  articles: Article[];
  articlesCount: number;
}

export interface ArticleResponse {
  article: Article;
}

export interface ArticleTagListResponse {
  tags: string[];
}

export default function ArticleRepository(axios: AxiosInstance) {
  const getArticleList = (
    params: ArticleListRequest = {}
  ): Promise<ArticleListResponse> => {
    return axios.get("/articles", { params }).then(({ data }) => data);
  };

  const getArticle = (slug: Article["slug"]): Promise<ArticleResponse> =>
    axios.get(`/articles/${slug}`).then(({ data }) => data);

  const getTagList = (): Promise<ArticleTagListResponse> =>
    axios.get("/tags").then(({ data }) => data);

  return {
    getArticleList,
    getArticle,
    getTagList,
  };
}
