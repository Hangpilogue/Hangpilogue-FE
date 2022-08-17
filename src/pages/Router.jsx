import { BrowserRouter, Routes, Route } from "react-router-dom";

import CommunityPage from "./CommunityPage";
import LogInPage from "./LogInPage";
import NotFound from "./NotFound";
import Header from "../components/common/Header";
import DetailPage from "./DetailPage";
import EditPage from "./EditPage";
import MyPage from "./MyPage";
import Layout from "../components/common/Layout";
import PostPage from "./PostPage";
import RegisterPage from "./RegisterPage";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />

        <Routes>
          <Route path="/" element={<CommunityPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="sign_up" element={<RegisterPage />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/detail/:postId" element={<DetailPage />} />
          <Route path="/edit/:postId" element={<EditPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
