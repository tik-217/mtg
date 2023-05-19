// react
import { Component, Fragment, ReactNode } from "react";

// store
import store from "@/store/store";
import { setPage } from "@/store/reducers";

// types
import { IInitialState, IPaginationProps } from "@/types";
import { connect } from "react-redux";

class Pagination extends Component<IPaginationProps> {
  paginItem(i: number) {
    return (
      <li
        className={this.props.page === i + 1 ? "numbers active" : "numbers"}
        onClick={(e) => this.paginHandler(e)}
      >
        {i + 1}
      </li>
    );
  }

  paginDots() {
    return <li className="dots">...</li>;
  }

  paginHandler(e: React.MouseEvent<HTMLLIElement>) {
    const pageNumber = +(e.target as HTMLLIElement).innerHTML;

    if (!isNaN(pageNumber)) {
      store.dispatch(setPage(pageNumber));
    }
  }

  paginStart(i: number, arr: number[]) {
    return (
      <>
        {i < 5 && this.paginItem(i)}

        {i === arr.length - 2 && this.paginDots()}

        {i === arr.length - 1 && this.paginItem(i)}
      </>
    );
  }

  paginMiddle(i: number, arr: number[]) {
    const min = this.props.page - 1;
    const mid = this.props.page;
    const max = this.props.page + 1;

    return (
      <>
        {i === 0 && this.paginItem(i)}

        {i === 3 && this.paginDots()}

        {(i + 1 === min || i + 1 === mid || i + 1 === max) && this.paginItem(i)}

        {i === arr.length - 3 && this.paginDots()}

        {i === arr.length - 1 && this.paginItem(i)}
      </>
    );
  }

  paginEnd(i: number, arr: number[]) {
    return (
      <>
        {i === 0 && this.paginItem(i)}

        {i === arr.length - 5 && this.paginDots()}

        {i > arr.length - 6 && this.paginItem(i)}
      </>
    );
  }

  paginOut(i: number, arr: number[]) {
    return (
      <>
        {this.props.maxPage >= 7 ? (
          <>
            {this.props.page < 5 && this.paginStart(i, arr)}

            {this.props.page >= 5 &&
              this.props.page <= arr.length - 4 &&
              this.paginMiddle(i, arr)}

            {this.props.maxPage === 7 ? (
              <>{this.props.page > arr.length - 3 && this.paginEnd(i, arr)}</>
            ) : (
              <>{this.props.page > arr.length - 4 && this.paginEnd(i, arr)}</>
            )}
          </>
        ) : (
          <>{this.paginItem(i)}</>
        )}
      </>
    );
  }

  paginButton(type: string) {
    if (type === "prev") {
      return (
        this.props.page !== 1 && store.dispatch(setPage(this.props.page - 1))
      );
    }
    if (type === "next") {
      return (
        this.props.page !== this.props.maxPage &&
        store.dispatch(setPage(this.props.page + 1))
      );
    }
  }

  render(): ReactNode {
    const maxPageArr: number[] = new Array(this.props.maxPage).fill(0);

    return (
      <>
        {this.props.reviewsPrepare.length > 10 && (
          <ul className="page">
            <li className="prev__btn" onClick={() => this.paginButton("prev")}>
              <span>&lArr;</span>
            </li>
            {maxPageArr.map((_, i, arr) => (
              <Fragment key={i}>{this.paginOut(i, arr)}</Fragment>
            ))}
            <li className="next__btn" onClick={() => this.paginButton("next")}>
              <span>&lArr;</span>
            </li>
          </ul>
        )}
      </>
    );
  }
}

function mapStateToProps(state: IInitialState) {
  return {
    page: state.page,
    maxPage: state.maxPage,
    reviewsPrepare: state.reviewsPrepare,
  };
}

export default connect(mapStateToProps, null)(Pagination);
