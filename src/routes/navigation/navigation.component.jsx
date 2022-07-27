import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { WatchlistContext } from "../../contexts/watchlist.context";
import {ReactComponent as MainLogo} from './../../assets/logo.svg'
import "./navigation.styles.css";

export default function Navigation() {
  const {watchlist} = useContext(WatchlistContext)

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
            Watchlist ({watchlist.length})
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
