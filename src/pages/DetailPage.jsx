//src.pages.DetailPage.jsx

import axios from "axios";

import DetailPost from "../components/detail/DetailPost";
import Comment from "../components/detail/Comment";
import CommentPost from "../components/detail/CommentPost";
import styled from "styled-components";

function DetailPage() {
  return (
    <>
      <StDetailPage>
        <DetailPost />
        <CommentPost />
        <Comment />
      </StDetailPage>
    </>
  );
}

const StDetailPage = styled.div`
  width: 600px;
  margin: 0 auto;
`

export default DetailPage;
