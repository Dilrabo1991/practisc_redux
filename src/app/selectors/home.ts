import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectPocemonList = (store: RootState) =>
  store.home.pocemonListType;
