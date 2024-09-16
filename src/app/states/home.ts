import { createSelector } from "@reduxjs/toolkit";
import get from "lodash/get";
import { selectPocemonList } from "../selectors/home";

export const selectPocemonListData = createSelector(
  selectPocemonList,
  (data) => {
    if (!data) {
      return {
        data: {},
        loading: false,
        error: "",
      };
    }

    const pocemonList = get(data, "data", []).map((item: any) => {
      return {
        ...item,
      };
    });

    return {
      ...data,
      data: {
        ...data?.data,
        pocemonList,
      },
    };
  }
);
