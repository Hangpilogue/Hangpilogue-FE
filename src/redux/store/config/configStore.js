import { configureStore } from '@reduxjs/toolkit';
import postSlice from "../../modules/postSlice";
import detailSlice from '../../modules/detailSlice';
import commentSlice from '../../modules/commentSlice';

const store = configureStore({
  reducer: {
    postSlice,
    detailSlice,
    commentSlice,
  },
})

export default store;