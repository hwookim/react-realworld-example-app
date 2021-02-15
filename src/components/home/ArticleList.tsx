import React, { useEffect, useState } from "react";
import ArticlePreview from "./ArticlePreview";

import { Article } from "../../type";
import $api from "../../api";

export default function ArticleList(): JSX.Element {
  const [articles, setArticles] = useState<Article[]>([]);

  const loadArticleList = async () => {
    const data = await $api.article.getArticleList();
    setArticles(data.articles);
  };

  useEffect(() => {
    loadArticleList();
  }, []);

  return (
    <div>
      {articles.map((article: Article) => (
        <ArticlePreview article={article} key={article.slug} />
      ))}
    </div>
  );
}
