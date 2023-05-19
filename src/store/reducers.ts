import { IReviewsData } from "@/types";
import initialState from "./initialState";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const reducers = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    setReviewsPrepare(state, action: PayloadAction<IReviewsData[]>) {
      state.reviewsPrepare = action.payload;
    },
    setMaxPage(state, action: PayloadAction<number>) {
      state.maxPage = action.payload;
    },
  },
});

export const { setPage, setLimit, setReviewsPrepare, setMaxPage } =
  reducers.actions;

export default reducers.reducer;
