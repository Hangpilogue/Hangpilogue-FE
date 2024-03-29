//src/redux/modules/detail

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CommentApis from "../../shared/commentRequest";



export const getComment = createAsyncThunk("GET_COMMENT", async (postId) => {
  try {
    const response = await CommentApis.getComment(postId)
    // console.log(response)
    return response.data
  } catch (err) {
    console.log(err)
  }
})


export const postComment = createAsyncThunk(
  "POST_COMMENT",
  async ({ content, postId }) => {
    // console.log(content)
    try {
      const response = await CommentApis.postComment({ content, postId });
      console.log(response.config.data)
      // return response.data //true
      // console.log(content);
      return response.config.data;
      // console.log(comments) //리턴하면 함수끝남
    } catch (err) {
      console.log(err);
    }
  }
);

export const editComment = createAsyncThunk("EDIT_COMMENT", async (post) => {
  try {
    const response = await CommentApis.editComment(post);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const deleteComment = createAsyncThunk(
  "DELETE_COMMENT",
  async (commentId) => {
    try {
      const response = await CommentApis.deleteComment(commentId)
      console.log(response)
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

// const initialState = "";

const initialState = {
  comments: {
    data: [
      {
        content: "",
        nickname: "",
        id: 0,
        postId: 0,
      },
    ],
    isLoading: false,
    error: null,
  },
  commentsPostId: {
    data: [],
    isLoading: false,
    error: null,
  },
};

// reducer counterSlice
export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    // [_getCommentPostList.fulfilled] : (state, {payload} ) => [...payload],
    // [_addComment.fulfilled] : (state, {payload} ) => [...state,payload],

    // 댓글 조회 (postID)
    [getComment.pending]: (state) => {
      state.commentsPostId.isLoading = true;
    },
    [getComment.fulfilled]: (state, action) => {
      state.commentsPostId.isLoading = false;
      state.commentsPostId.data = action.payload;
    },
    [getComment.rejected]: (state, action) => {
      state.commentsPostId.isLoading = false;
      state.commentsPostId.error = action.payload;
    },

    // 댓글 추가
    [postComment.pending]: (state) => {
      state.commentsPostId.isLoading = true;
    },
    [postComment.fulfilled]: (state, action) => {
      state.commentsPostId.isLoading = false;
      // state.commentsPostId.data.push(action.payload);
      //react에서는 push X => 원본배열 망가뜨림
      // console.log(state)
      // console.log(action.payload)
      state.comments.data=[...state.comments.data, action.payload]
    },

    [postComment.rejected]: (state, action) => {
      state.commentsPostId.isLoading = false;
      // state.commentsPostId.error = action.payload;
      // state.isLoading = true
      state.status = "rejected";
    },

    // 댓글 수정
    [editComment.pending]: (state) => {},
    [editComment.fulfilled]: (state, action) => {
      const target = state.commentsPostId.data.findIndex(
        (comment) => comment.postId === action.payload.id
      );
      state.commentsPostId.data.splice(target, 1, action.payload);
    },
    [editComment.rejected]: () => {},

    // 댓글 삭제
    [deleteComment.pending]: (state) => {
      state.commentsPostId.isLoading = true;
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.commentsPostId.isLoading = false;
      const target = state.commentsPostId.data.findIndex(
        (comment) => comment.id === action.payload
      );
      state.commentsPostId.data.splice(target, 1);
    },
    [deleteComment.rejected]: (state, action) => {
      state.commentsPostId.isLoading = false;
      state.commentsPostId.error = action.payload;
    },
  },
});

export const { } = commentSlice.actions;
export default commentSlice.reducer;
