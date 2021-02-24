import React, { useEffect, useState } from "react";
import ArticleListItem from "./ArticleListItem";

import { Article } from "../../type";
import $api from "../../api";

export default function ArticleList(): JSX.Element {
  const [, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Article[]>([]);

  const loadArticles = async () => {
    const data = await $api.article.getArticles();
    setArticles(data.articles);
  };

  useEffect(() => {
    setLoading(true);
    loadArticles();
    return () => setLoading(false);
  }, []);

  return (
    <div>
      {articles.map((article: Article) => (
        <ArticleListItem article={article} key={article.slug} />
      ))}
    </div>
  );
}
