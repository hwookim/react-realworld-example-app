import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Article } from "../../type";
import $api from "../../api";

export interface Props {
  slug: Article["slug"];
}

export default function ArticlePage({
  match,
}: RouteComponentProps<Props>): JSX.Element {
  const { slug } = match.params;
  const [article, setArticle] = useState<Article>();

  const loadArticle = async () => {
    const { article } = await $api.article.getArticle(slug);
    setArticle(article);
  };

  useEffect(() => {
    loadArticle();
  }, []);

  return (
    <div className="article-page" data-testid="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article?.title}</h1>
        </div>
      </div>
    </div>
  );
}
