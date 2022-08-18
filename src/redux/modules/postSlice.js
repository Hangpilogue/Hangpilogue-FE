import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apis from "../../shared/Request";
// import PPIKKA from "../../sounds/피카츄.mp3";
//
//
// const audio = new Audio(PPIKKA)
// const playSounds = () => {
//   audio.volume = 0.05
//   audio.play()
// }
//
export const getPosts = createAsyncThunk("GET_POSTS", async () => {
  try {
    const response = await apis.getPosts();
    return response.data.postlists;
  } catch (err) {
    console.log(err);
  }
});

export const postPosts = createAsyncThunk("POST_POSTS", async (post) => {
  try {
    const response = await apis.postPosts(post);
    return post;
  } catch (err) {
    console.log(err.response.data);
  }
});

export const editPosts = createAsyncThunk("EDIT_POSTS", async (post) => {
  try {
    const response = await apis.editPosts(post);
    return post;
  } catch (err) {
    console.log(err);
  }
});

export const deletePosts = createAsyncThunk("DELETE_POSTS", async (postId) => {
  try {

    await apis.deletePosts(postId)
    return postId

  } catch (err) {
    console.log(err);
  }
});

export const getMyPosts = createAsyncThunk("GET_MY_POSTS", async () => {
  try {
    const response = await apis.getMyPosts();
    return response.data.mypostlists;
  } catch (err) {
    console.log(err);
  }
});


export const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    status: "Welcome",
    posts: [],
    myPosts: [],
    // playSounds
  },
  reducers: {},
  extraReducers: {
    [postPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = "fulfilled";
      state.posts = [...state.posts, action.payload];
    },
    [postPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.status = "pending";
    },
    [postPosts.rejected]: (state, action) => {
      state.isLoading = true;
      state.status = "rejected";
    },
    [editPosts.pending]: (state, action) => {
      state.isLoading = false;
      state.status = "pending";
    },
    [getPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.status = "pending";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = "fulfilled";
      state.posts = [...action.payload];
    },
    [getPosts.rejected]: (state, action) => {
      state.isLoading = true;
      state.status = "rejected";
    },

    [editPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = "fulfilled";
      state.posts = state.posts.map((data) => {
        if (data.postId === action.payload.id) {
          return { ...data, ...action.payload };
        } else {
          return data;
        }
      });
    },
    [editPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.status = "rejected";
    },
    [deletePosts.pending]: (state, action) => {
      state.isLoading = false;
      state.status = "pending";
    },
    [deletePosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = "fulfilled";
      state.posts = state.posts.filter((data) => {
        return parseInt(data.id) !== parseInt(action.payload);
      });
    },
    [deletePosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.status = "rejected";
    },
    [getMyPosts.fulfilled]: (state, action) => {
      state.myPosts = [...action.payload];
    },
  },
});

export const {} = postSlice.actions;

export default postSlice.reducer;
