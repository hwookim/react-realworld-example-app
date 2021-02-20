import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Article } from "../../type";
import $api from "../../api";
import ArticleInfo from "./ArticleInfo";

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

  return article ? (
    <div className="article-page">
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
      </div>
    </div>
  ) : (
    <div />
  );
}
