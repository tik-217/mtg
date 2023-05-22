// react
import { Component, ReactNode } from "react";

// services
import reviews from "@/services/data.json";

// components
import Pagination from "./Pagination";

// styles
import "@/styles/Reviews.css";

// types
import { IInitialState, IReviewsProps } from "@/types";

// store
import store from "@/store/store";
import { setMaxPage, setReviewsPrepare } from "@/store/reducers";
import { connect } from "react-redux";

class Reviews extends Component<IReviewsProps> {
  componentDidMount(): void {
    const reviewsArr = Object.values(reviews.ru);
    const maxPagePrepare = Math.ceil(reviewsArr.length / this.props.limit);

    store.dispatch(setReviewsPrepare(reviewsArr));
    store.dispatch(setMaxPage(maxPagePrepare));
  }

  render(): ReactNode {
    const startSlice = this.props.limit * this.props.page - this.props.limit;
    const endSlice = this.props.limit * this.props.page;

    const limitReviews = this.props.reviewsPrepare.slice(startSlice, endSlice);

    console.log(limitReviews);

    return (
      <div className="reviews">
        <h1>Reviews</h1>
        <div className="reviewsList">
          {limitReviews.map((el, i) => (
            <div className="reviewsList__card" key={el.date + i}>
              <h3>{el.name}</h3>
              <p>{el.review}</p>
              <time dateTime={el.date}>{el.date}</time>
            </div>
          ))}
        </div>
        <Pagination />
      </div>
    );
  }
}

function mapStateToProps(state: IInitialState) {
  return {
    page: state.page,
    limit: state.limit,
    reviewsPrepare: state.reviewsPrepare,
  };
}

export default connect(mapStateToProps, null)(Reviews);
