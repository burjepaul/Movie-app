import React from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as MainLogo} from './../../assets/logo.svg'
import "./navigation.styles.css";

export default function Navigation() {
  return (
    <>
      <div className="navigation-container">
        <div className="logo-container">
          <Link className="nav-link" to="/">
            <MainLogo style={{ height: 35, width: 250 }}/>
          </Link>
        </div>
        <div className="link-container">
          <Link className="nav-link" to="/popular">
            Popular
          </Link>
          <Link className="nav-link" to="/watchlist">
            Watchlist
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
