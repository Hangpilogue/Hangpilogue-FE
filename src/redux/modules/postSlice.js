import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const URL = "http://localhost:4000"

export const getPosts = createAsyncThunk("GET_POSTS", async (posts)=> {
  try {
    const response = await axios.get(URL + "/posts")
    return response.data
  }catch (err) {
    console.log(err)
  }
})

export const postPosts = createAsyncThunk("POST_POSTS", async (posts) => {
  try {
    const response = await axios.post(URL + "/posts", {...posts})
    return response.data
  } catch (err) {
    console.log(err)
  }
})

const initialState = []

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled]:(state, action) => [...action.payload],
    [postPosts.fulfilled]: (state, action) => console.log("a"),
  }
});

export const {} = postSlice.actions;
export default postSlice.reducer;