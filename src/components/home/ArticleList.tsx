import React, { useEffect, useState } from "react";
import ArticlePreview from "./ArticlePreview";

import { Article } from "../../type";
import $api from "../../api";

export default function ArticleList(): JSX.Element {
  const [, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Article[]>([]);

  const loadArticleList = async () => {
    const data = await $api.article.getArticleList();
    setArticles(data.articles);
  };

  useEffect(() => {
    setLoading(true);
    loadArticleList();
    return () => setLoading(false);
  }, []);

  return (
    <div>
      {articles.map((article: Article) => (
        <ArticlePreview article={article} key={article.slug} />
      ))}
    </div>
  );
}
