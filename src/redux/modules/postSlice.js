import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getPost = createAsyncThunk("GET_POST",  ()=> {
  try {
    const response = axios.get("http://localhost:4000/posts")
    console.log(response)
    return response.data
  } catch (err) {
    console.log(err)
  }
})



const initialState = ""

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getPost.fulfilled] : (state, action) => null
  }
});

export const {users} = postSlice.actions;
export default postSlice.reducer;
