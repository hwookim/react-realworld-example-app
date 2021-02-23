import { AxiosInstance } from "axios";
import { Article, Comment } from "../../type";

export interface CommentListResponse {
  comments: Comment[];
}

export default function CommentRepository(axios: AxiosInstance) {
  const getCommentsByArticleId = (
    slug: Article["slug"]
  ): Promise<CommentListResponse> =>
    axios.get(`/articles/${slug}/comments`).then(({ data }) => data);

  return {
    getCommentsByArticleId,
  };
}
