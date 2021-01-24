import React from "react";

function Header(): JSX.Element {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#/">
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <a className="nav-link" href="#/">
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
