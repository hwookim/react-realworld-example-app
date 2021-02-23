import React from "react";

import { Article } from "../../type";
import ArticleInfo from "./ArticleInfo";

export interface Props {
  article: Article;
}

export default function ArticleContainer({ article }: Props): JSX.Element {
  return (
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
  );
}
