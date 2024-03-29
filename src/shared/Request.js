import axios from "axios";

//토큰값 구하기
let x, USER_TOKEN;
//axios 인스턴스
const api = axios.create({
  baseURL: process.env.REACT_APP_DB_URL,
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

const apis = {
  getPosts: () => api.get("/posts"),
  getMyPosts: (page)=> api.get(`/posts/myposts/${page}`),
  postPosts: (posts) => api.post("/posts", {...posts}),
  editPosts: (posts) => api.put(`/posts/${posts.id}`, posts),
  deletePosts: (postId) => api.delete(`/posts/${postId}`)
}

export default apis