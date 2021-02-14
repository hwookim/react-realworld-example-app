import React from "react";
import Header from "./components/common/Header";
import { Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";

export default function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  );
}
