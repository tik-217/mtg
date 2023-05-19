// react
import { Component, ReactNode } from "react";

// images
import itranslate from "@/assets/images/itranslate.svg";

// components
import Watch from "./Watch";

// styles
import "@/styles/Header.css";

export default class Header extends Component {
  render(): ReactNode {
    return (
      <header className="header">
        <div className="header__wrapper">
          <div className="header__lang">
            <img
              src={itranslate}
              alt="itranslate"
              className="header__langImage"
            />
            <ul className="header__langList">
              <li>RU</li>
              <li>EN</li>
            </ul>
          </div>
          <Watch />
        </div>
      </header>
    );
  }
}
