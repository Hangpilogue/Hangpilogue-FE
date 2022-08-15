import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
  // timeout:2000,
})

// api.defaults.headers.common["Authorization"] = USER_TOKEN

const apis = {
  getPosts: () => api.get("/posts"),
  // getMyPosts: (id)=> api.get(`/posts?id=${id}`),
  postPosts: (posts) => api.post("/posts", {...posts}),
  editPosts: (posts) => api.patch(`/posts/${posts.id}`, {...posts}),
  deletePosts:(posts) => api.delete(`/posts/${posts}`)
}

export default apis