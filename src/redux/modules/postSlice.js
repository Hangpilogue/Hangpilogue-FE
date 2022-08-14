import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../shared/Request";
import apis from "../../shared/Request";
//
export const getPosts = createAsyncThunk("GET_POSTS", async () => {
  try {
    const response = await apis.getPosts()
    return response.data
  } catch (err) {
    console.log(err)
  }
})

export const postPosts = createAsyncThunk("POST_POSTS", async (post) => {
  try {
    const response = await apis.postPosts(post)
    return response.data
  } catch (err) {
    console.log(err)
  }
})

export const editPosts = createAsyncThunk("EDIT_POSTS", async (post) => {
  try {
    const response = await apis.editPosts(post)
    return response.data
  } catch (err) {
    console.log(err)
  }
})


export const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    status: "Welcome",
    posts: []
  },
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.isLoading = true
      state.status = "pending"
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.status = "fulfilled"
      state.posts = [...action.payload]
    },
    [getPosts.rejected]: (state, action) => {
      state.isLoading = true
      state.status = "rejected"
    },
    [postPosts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.status = "fulfilled"
      state.posts = [...state.posts, action.payload]
    },
    [postPosts.pending]: (state, action) => {
      state.isLoading = true
      state.status = "pending"
    },
    [postPosts.rejected]: (state, action) => {
      state.isLoading = true
      state.status = "rejected"
    },
    [editPosts.pending]: (state, action) => {
      state.isLoading = false
      state.status = "pending"
    },
    [editPosts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.status = "fulfilled"
      state.posts = state.posts.map((data) => {
        if (data.id === action.payload.id) {
          return {...data, ...action.payload}
        } else {
          return data
        }
      })
    },
    [editPosts.rejected]: (state, action) => {
      state.isLoading = false
      state.status = "rejected"
    }
  }
});


export const {} = postSlice.actions;

export default postSlice.reducer;
