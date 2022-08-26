import React, { useContext } from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import BurgerMenu from "../../components/nav-burgerMenu/nav-burgerMenu";
import { WatchlistContext } from "../../contexts/watchlist.context";
import { ReactComponent as MainLogo } from "./../../assets/logo.svg";
import "./navigation.styles.scss";

export default function Navigation() {
  const { watchlist } = useContext(WatchlistContext);
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <div className="navigation-container">
        <div className="logo-container">
          <Link className="logo-link" to="/">
            <MainLogo className="main-logo" />
          </Link>
        </div>
        <div
          className={mobileNav ? "link-container" : "link-container deactive"}
        >
          <div className="links">
            <Link className="nav-link" to="/popular">
              Popular
            </Link>
            <Link className="nav-link" to="/watchlist">
              Watchlist ({watchlist.length})
            </Link>
            <Link className="nav-link" to="/tvShow">
              Tv Shows
            </Link>
          </div>
        </div>
        <BurgerMenu setMobileNav={setMobileNav} mobileNav={mobileNav} />
      </div>
      <Outlet />
    </>
  );
}
