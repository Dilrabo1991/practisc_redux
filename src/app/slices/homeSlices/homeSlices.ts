import { selectPocemonListData } from "./../../states/home";
import { selectPocemonList } from "./../../selectors/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import get from "lodash/get";
import { initialState } from "./types";
import homeServices from "../../../api/home";

const InitialState: initialState = {
  pocemonListType: {
    data: {},
    loading: false,
    error: "",
  },
};

export const fetchPocemonList = createAsyncThunk(
  "home/fetchPocemonList",
  async () => {
    //   const request = await homeServices.list();
    //   if (get(request, "status", "") != 200) {
    //     return get(request, "message", "");
    //   }
    //   const respond = await request.data;
    //   return respond;
  }
);

const homeSlices = createSlice({
  name: "home",
  initialState: InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPocemonList.pending, (state) => {
      state.pocemonListType = {
        data: {},
        loading: true,
        error: "",
      };
    });
    builder.addCase(fetchPocemonList.fulfilled, (state, actions) => {
      state.pocemonListType = {
        data: get(actions, "payload.data", {}),
        loading: false,
        error: "",
      };
    });
    builder.addCase(fetchPocemonList.rejected, (state, actions) => {
      state.pocemonListType = {
        data: {},
        loading: false,
        error: get(actions, "error.message", ""),
      };
    });
  },
});

export const {} = homeSlices.actions;
export default homeSlices.reducer;
