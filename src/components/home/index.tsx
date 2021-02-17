import React from "react";
import { APP_NAME } from "../../utils/constants";
import ArticleList from "./ArticleList";
import ArticleTagList from "./ArticleTagList";

export default function HomePage(): JSX.Element {
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">{APP_NAME}</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a href="" className="nav-link active">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>
            <ArticleList />
          </div>
          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <ArticleTagList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
