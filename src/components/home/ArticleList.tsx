import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { pageState } from "../../state/pageState";

import ArticleListItem from "./ArticleListItem";

import { Article } from "../../type";
import $api from "../../api";
import { NO_ARTICLES_MESSAGE } from "../../utils/constants";
import ArticleListPagination from "./ArticleListPagination";

export default function ArticleList(): JSX.Element {
  const [, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Article[]>([]);
  const [articlesCount, setArticlesCount] = useState<number>(0);
  const currentPage = useRecoilValue<number>(pageState);

  const loadArticles = async () => {
    const { articles, articlesCount } = await $api.article.getArticles({
      limit: 10,
      offset: currentPage * 10,
    });
    setArticles(articles);
    setArticlesCount(articlesCount);
  };

  useEffect(() => {
    setLoading(true);
    loadArticles();
    return () => setLoading(false);
  }, [currentPage]);

  if (!articles.length) {
    return <div className="article-preview">{NO_ARTICLES_MESSAGE}</div>;
  }

  return (
    <div>
      {articles.map((article: Article) => (
        <ArticleListItem article={article} key={article.slug} />
      ))}
      <ArticleListPagination articlesCount={articlesCount} />
    </div>
  );
}
