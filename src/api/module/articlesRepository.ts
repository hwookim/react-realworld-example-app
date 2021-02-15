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

export default function ArticleRepository(axios: AxiosInstance) {
  const getArticleList = (
    params: ArticleListRequest = {}
  ): Promise<ArticleListResponse> => {
    return axios.get("/articles", { params }).then(({ data }) => data);
  };

  return {
    getArticleList,
  };
}
