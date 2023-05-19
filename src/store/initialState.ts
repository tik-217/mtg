import { IInitialState, IReviewsData } from "@/types";

const initialState = {
  page: 1,
  limit: 10,
  reviewsPrepare: [] as IReviewsData[],
  maxPage: 1,
} as IInitialState;

export default initialState;
