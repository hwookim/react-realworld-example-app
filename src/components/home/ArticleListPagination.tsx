import React from "react";
import { useRecoilState } from "recoil";
import { pageState } from "../../state/pageState";

export interface Props {
  articlesCount: number;
}

export default function ArticleListPagination({ articlesCount }: Props) {
  const [currentPage, setCurrentPage] = useRecoilState<number>(pageState);

  const pages = [];
  for (let i = 1; i <= Math.ceil(articlesCount / 10); ++i) {
    pages.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => {
          const isCurrent = page === currentPage;
          return (
            <li
              className={isCurrent ? "page-item active" : "page-item"}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              <button className="page-link">{page}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
