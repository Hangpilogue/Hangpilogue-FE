//src/redux/modules/detail


import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getCommentList = createAsyncThunk("GET_LIST", async (id) => {
  try {
    const response = await axios.get("http://localhost:4000/comment?postid=${id}")
    // console.log(response)
    return response.data
  } catch (err) {
    console.log(err)
  }
})


export const addCommentList = createAsyncThunk("ADD_LIST", async (newCommentList) => {
  try {
    const response = await axios.get("http://localhost:4000/comment?postid=${newCommentList.postId}",newCommentList)
    // console.log(response)
    return response.data
  } catch (err) {
    console.log(err)
  }
})


const initialState = "";


// reducer counterSlice
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [getCommentList.fulfilled] : (state, {payload} ) => [...payload],
    [addCommentList.fulfilled] : (state, {payload} ) => [...state,payload],
  }
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;

