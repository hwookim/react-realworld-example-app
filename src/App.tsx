import React from "react";
import Header from "./components/common/Header";
import { Route } from "react-router-dom";
import HomePage from "./components/home";
import LoginPage from "./components/login";
import RegisterPage from "./components/register";
import ArticlePage from "./components/article";

export default function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/article/:slug" component={ArticlePage} />
    </div>
  );
}
