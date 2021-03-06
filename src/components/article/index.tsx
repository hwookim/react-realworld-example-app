import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import ArticleInfo from "./ArticleInfo";
import CommentList from "./CommentList";

import { Article, Comment } from "../../type";
import $api from "../../api";
import { EMPTY_ARTICLE } from "../../utils/constants";

export interface Props {
  slug: Article["slug"];
}

export default function ArticlePage({
  match,
}: RouteComponentProps<Props>): JSX.Element {
  const { slug } = match.params;
  const [article, setArticle] = useState<Article>(EMPTY_ARTICLE);
  const [comments, setComments] = useState<Comment[]>([]);

  const loadArticle = async () => {
    const { article } = await $api.article.getArticle(slug);
    setArticle(article);
  };

  const loadComments = async () => {
    const { comments } = await $api.comment.getCommentsByArticleId(slug);
    setComments(comments);
  };

  useEffect(() => {
    loadArticle();
    loadComments();
  }, []);

  return (
    <div className="article-page" data-testid="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>
          <ArticleInfo article={article} />
        </div>
      </div>
      <div className="container page">
        <div className="row article-content">
          <div className="col-xs-12">
            <div>
              <p>{article.body}</p>
            </div>
            <ul className="tag-list">
              {article.tagList.map((tag) => {
                return (
                  <li className="tag-default tag-pill tag-outline" key={tag}>
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <hr />
        <div className="row">
          <CommentList comments={comments} />
        </div>
      </div>
    </div>
  );
}
