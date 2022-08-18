//src/redux/modules/detail

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDetail = createAsyncThunk("GET_DETAIL", async (id) => {
  try {
    const response = await axios.get(`http://localhost:4000/posts?id=${id}`);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

// reducer detailSlice
export const detailSlice = createSlice({
  name: "detail",
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: {
    [getDetail.fulfilled]: (state, { payload }) => [...payload],
  },
});

export const {} = detailSlice.actions;
export default detailSlice.reducer;

// const axios = require('axios');
//axios.<method>는 이제 자동 완성과 파라미터 타이핑을 제공합니다.

// // 지정된 ID를 가진 유저에 대한 요청
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // 성공 핸들링
//     console.log(response);
//   })
//   .catch(function (error) {
//     // 에러 핸들링
//     console.log(error);
//   })
//   .then(function () {
//     // 항상 실행되는 영역
//   });

// // 선택적으로 위의 요청은 다음과 같이 수행될 수 있습니다.
// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//     // 항상 실행되는 영역
//   });

// // async/await 사용을 원한다면, 함수 외부에 `async` 키워드를 추가하세요.
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
