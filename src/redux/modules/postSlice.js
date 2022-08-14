import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../shared/Request";
//

export const getPosts = createAsyncThunk("GET_POSTS2", async () => {

  return await instance.get('/posts')
    .then((res) => {
      return res.data
    }).catch((err) => {
        return err
      }
    )
})


//
const URL = "http://localhost:4000"

export const postPosts = createAsyncThunk("POST_POSTS", async (posts) => {
  try {
    const response = await axios.post(URL + "/posts", {...posts})
    return response.data
  } catch (err) {
    console.log(err)
  }
})

export const editPosts = createAsyncThunk("EDIT_POSTS", async (posts) => {
  console.log(posts)
  try {
    const response = await axios.patch(URL + `/posts/${posts.id}`, {...posts})
    return response.data
  } catch (err) {
    console.log(err)
  }
})



export const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoading:false,
    posts:[]
  },
  reducers: {},
  extraReducers: {
    [getPosts.pending]:(state,action) => {
      state.isLoading = true
      console.log(11)
    } ,
    [getPosts.rejected]:(state,action) => {
      state.isLoading = true
      console.log(22)

    } ,
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.posts = [...action.payload]
    },
    // [getPosts.fulfilled]:(state, action) => [...action.payload],
    [postPosts.fulfilled]: (state, action) => [...state, action.payload],
    [editPosts.fulfilled]: (state, action) => (
      state.map((data) => {
        if (data.id === action.payload.id) {
          return {...data, ...action.payload}
        } else {
          return data
        }
      })
    )
  }
});


export const {} = postSlice.actions;

export default postSlice.reducer;
