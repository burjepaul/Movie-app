import React from "react";
import "./nav-burgerMenu.css"


const handleNavigation = (event) =>{
    event.currentTarget.classList.toggle('change');
  }

export default function BurgerMenu() {
  return (
    <div className="menu-bars" id="menu-bars" onClick={handleNavigation}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}
