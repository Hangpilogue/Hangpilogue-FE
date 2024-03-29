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
  postComment: ({content, postId}) => api.post(`/posts/${postId}/comment`, {content}),
  editComment: ({content, postId}) => api.put(`/posts/${postId}/commentId`, {content}),
  deleteComment: ({content, postId, commentId}) => api.delete(`/posts/${postId}/${commentId}`)
}

export default CommentApis