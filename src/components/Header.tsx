// react
import { Component, ReactNode } from "react";

// images
import itranslate from "@/assets/images/itranslate.svg";

// components
import Watch from "./Watch";

// styles
import "@/styles/Header.css";

// services
import reviews from "@/services/data.json";

// types
import { IHeaderProps, IInitialState, IReviewsData } from "@/types";

// store
import store from "@/store/store";
import { setReviewsPrepare } from "@/store/reducers";
import { connect } from "react-redux";

class Header extends Component<IHeaderProps> {
  changeLang(typeLang: string) {
    let reviewsArr: IReviewsData[] = [];

    if (typeLang === "ru") {
      reviewsArr = Object.values(reviews.ru);
    } else if (typeLang === "en") {
      reviewsArr = Object.values(reviews.en);
    }

    store.dispatch(setReviewsPrepare(reviewsArr));
  }

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
              <li onClick={() => this.changeLang("ru")}>RU</li>
              <li onClick={() => this.changeLang("en")}>EN</li>
            </ul>
          </div>
          <Watch />
        </div>
      </header>
    );
  }
}

function mapStateToProps(state: IInitialState) {
  return {
    reviewsLang: state.reviewsLang,
  };
}

export default connect(mapStateToProps, null)(Header);
