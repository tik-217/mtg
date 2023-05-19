export interface IWatchProps {}

export interface IWatchState {
  currentTime: Date;
}

export interface IReviewsData {
  date: string;
  name: string;
  review: string;
}

export interface IReviewsProps {
  page: number;
  limit: number;
  reviewsPrepare: IReviewsData[];
}

export interface IPaginationProps {
  page: number;
  maxPage: number;
  reviewsPrepare: IReviewsData[];
}

export interface IInitialState {
  page: number;
  limit: number;
  reviewsPrepare: IReviewsData[];
  maxPage: number;
}
