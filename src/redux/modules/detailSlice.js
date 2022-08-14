//src/redux/modules/detail


import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getPost = createAsyncThunk("GET_POST", async (id) => {
  try {
    const response = await axios.get("http://localhost:4000/posts?id=${id}")
    // console.log(response)
    return response.data
  } catch (err) {
    console.log(err)
  }
})



const initialState = "";


// reducer counterSlice
export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    [getPost.fulfilled] : (state, {payload} ) => [...payload],
  }
});

export const {} = detailSlice.actions;
export default detailSlice.reducer;

