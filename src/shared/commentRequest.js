import axios from "axios";

//토큰값 구하기
let x, USER_TOKEN;


//axios 인스턴스
const api = axios.create({
  baseURL: "http://taesik.shop/api/",
  timeout: 2000,
})

api.interceptors.request.use((config) => {
  function getCookie(cookie_name) {
    let val = document.cookie.split(';');
    for (let i = 0; i < val.length; i++) {
      x = val[i].substr(0, val[i].indexOf('='));
      USER_TOKEN = val[i].substr(val[i].indexOf('=') + 1);
      x = x.replace(/^\s+|\s+$/g, '');
      if (x === cookie_name) {
        return USER_TOKEN
      }
    }
  }

  getCookie("token")
  config.headers["Authorization"] = "Bearer" + " " + USER_TOKEN
  return config
})

const CommentApis = {
  getComment: (postId) => api.get(`/posts/${postId}`),
  postComment: ({comment, postId}) => api.post(`/posts/${postId}/comment`, {comment}),
  editComment: ({comment, postId}) => api.put(`/posts/${postId}/commentId`, {comment}),
  deleteComment: ({comment, postId}) => api.delete(`/posts/${postId}/commentId`)
}

export default CommentApis