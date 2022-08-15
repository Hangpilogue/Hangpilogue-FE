//src.pages.DetailPage.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { getDetail } from "../redux/modules/detailSlice";

import DetailPost from "../components/detail/DetailPost";
import Comment from "../components/detail/Comment";

function DetailPage() {
  const detailSlice = useSelector((state) => state.detailSlice.posts);
  // console.log(detailSlice);
  // const [ detailPost, setDetailPost ] = useState();

  // const deleteDetail = async () => {
  //     const { data }= await axios.delete(`http://localhost:4000/posts/${postId.id}`)
  //     setDetail(...data, data);
  // };

  return (
    <>
      <div></div>
      <DetailPost
      // list={{...detail}}
      // key= {detailSlice.id}
      />
      <Comment />
    </>
  );
}

export default DetailPage;
