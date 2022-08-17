//src/redux/modules/detail


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const _getCommentPostList = createAsyncThunk("GET_COMMENT_POST_LIST", async (id) => {
  try {
    const response = await axios.get(`http://localhost:4000/comment?postId=${id}`)
    // console.log(response)
    return response.data
  } catch (err) {
    console.log(err)
  }
})


export const _addComment = createAsyncThunk("ADD_COMMENT", async (newCommentList) => {
  try {
    const response = await axios.get(`http://localhost:4000/comment?postId=${newCommentList.postId}`,newCommentList)
    // console.log(response)
    return response.data
  } catch (err) {
    console.log(err)
  }
})


export const _updateComment = createAsyncThunk("UPDATE_COMMENT",async (arg, thunkAPI) => {
    try {
      axios.patch(`http://localhost:4000/comment?${arg.id}`, arg);
      return thunkAPI.fulfillWithValue(arg);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const _deleteComment = createAsyncThunk("DELETE_COMMENT",async (arg, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:4000/comments/${arg}`);
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);


const initialState = "";


// reducer counterSlice
export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    clearComment: (state) => {
      state.data.content = "";
    }
  },
  extraReducers: {
    // [_getCommentPostList.fulfilled] : (state, {payload} ) => [...payload],
    // [_addComment.fulfilled] : (state, {payload} ) => [...state,payload],

    // 댓글 조회 (postID)
    [_getCommentPostList.pending]: (state) => {
      // state.commentsPostId.isLoading = true;
    },
    [_getCommentPostList.fulfilled]: (state, action) => {
      // state.commentsPostId.isLoading = false;
      state.commentsPostId.data = action.payload;
    },
    [_getCommentPostList.rejected]: (state, action) => {
      // state.commentsPostId.isLoading = false;
      state.commentsPostId.error = action.payload;
    },

    // 댓글 추가
    [_addComment.fulfilled]: (state, action) => {
      // state.commentsPostId.isLoading = false;
      state.commentsPostId.data.push(action.payload);
    },
    [_addComment.rejected]: (state, action) => {
      // state.commentsPostId.isLoading = false;
      state.commentsPostId.error = action.payload;
    },
    [_addComment.pending]: (state) => {
      // state.commentsPostId.isLoading = true;
    },

    
    // 댓글 수정
    [_updateComment.pending]: (state) => {},
    [_updateComment.fulfilled]: (state, action) => {
      const target = state.commentsPostId.data.findIndex(
        (comment) => comment.postId === action.payload.id
      );
      state.commentsPostId.data.splice(target, 1, action.payload);
    },
    [_updateComment.rejected]: () => {},

    // 댓글 삭제
    [_deleteComment.pending]: (state) => {
      // state.commentsPostId.isLoading = true;
    },
    [_deleteComment.fulfilled]: (state, action) => {
      // state.commentsPostId.isLoading = false;
      const target = state.commentsPostId.data.findIndex(
        (comment) => comment.id === action.payload
      );
      state.commentsPostId.data.splice(target, 1);
    },
    [_deleteComment.rejected]: (state, action) => {
      // state.commentsPostId.isLoading = false;
      state.commentsPostId.error = action.payload;
    },
  }
});

export const { clearComment } = commentSlice.actions;
export default commentSlice.reducer;

