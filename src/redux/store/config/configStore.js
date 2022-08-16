import { configureStore } from '@reduxjs/toolkit';
import postSlice from "../../modules/postSlice";
import detailSlice from '../../modules/detailSlice';
import commentSlice from '../../modules/commentSlice';
import tokenSlice from "../../modules/tokenSlice";

const store = configureStore({
  reducer: {
    postSlice,
    detailSlice,
    commentSlice,
    tokenSlice,
  },
})


export default store;
