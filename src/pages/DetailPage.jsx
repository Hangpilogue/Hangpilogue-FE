//src.pages.DetailPage.jsx

import DetailPost from "../components/detail/DetailPost";
import Comment from "../components/detail/Comment";
import CommentPost from "../components/detail/CommentPost";

function DetailPage() {
  return (
    <>
      <div>
        <DetailPost />
        <CommentPost />
        <Comment />
      </div>
    </>
  );
}

export default DetailPage;
