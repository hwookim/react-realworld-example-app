import React from "react";
import { APP_NAME } from "../../utils/constants";

function Home(): JSX.Element {
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">{APP_NAME}</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
