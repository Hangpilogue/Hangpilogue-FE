import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const URL = "http://localhost:4000"

export const getPosts = createAsyncThunk("GET_POSTS", async (posts)=> {
  try {
    const response = await axios.get(URL + "/posts")
  }catch (err) {
    console.log(err)
  }
})

export const postPosts = createAsyncThunk("POST_POSTS", async (posts) => {
  try {
    const response = await axios.post(URL + "/posts", {...posts})
    console.log(response)
    return response.data
  } catch (err) {
    console.log(err)
  }
})

const initialState = [
  {
    isLoading: false
  }
]

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    // [postPosts.fulfilled]: (state, action) => state[0].isLoading = false,
  }
});

export const {} = postSlice.actions;
export default postSlice.reducer;