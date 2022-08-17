////src/components/posts/DetailPost

import styled from "styled-components";

import Button from "../common/Button";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import { getDetail } from "../../redux/modules/detailSlice";
import { getPosts } from "../../redux/modules/postSlice";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function DetailPost() {
  // const { id, title, content, nickname, img } = props.detail;
  // console.log(title)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams(); // 게시물 ID받아오기
  // console.log(postId);
  const postList = useSelector((state) => state.postSlice.posts[postId]);
  console.log(postList);

  // const getPosts = async () => {
  //   const data = await axios.get(`http://localhost:4000/posts/${postId}`);
  //   // console.log(data.data);
  //   setDetail(data.data);
  //   setLoadedImg(data.data.img);
  // };

  useEffect(() => {
    dispatch(getPosts(postId));
    // setDetail(...postList);
    // setLoadedImg(detail.data.img);
  }, []);

  const onClickEditButton = () => {
    navigate(`/edit/${postId}`);
  };

  const onClickDeleteButton = () => {
    navigate(`/posts`);
  };

  return (
    <>
      <DetailLayout>
        <div className="container">
          <div className="titleContainer">
            <h1> {postList?.title} </h1>
            <span> 작성자 : {postList?.nickname} </span>
            <hr></hr>
            <span> {postId}번째 게시물 </span>
          </div>
          <div className="buttonContainer">
            <Button
              type="button"
              buttonText={"수정하기"}
              action={onClickEditButton}
            />
            <Button
              type="button"
              buttonText={"삭제하기"}
              action={onClickDeleteButton}
            />
          </div>
        </div>

        <div className="imageContainer">
          <div>
            <img src={postList.img} alt="?" />
          </div>
        </div>
        <div className="textContainer">
          <div>{postList?.content} </div>
        </div>
      </DetailLayout>
    </>
  );
}

export default DetailPost;

const DetailLayout = styled.div`
  /* background-color: aliceblue; */
  border: 2px solid #aaa;
  border-radius: 4px;

  max-width: 800px;
  min-width: 500px;
  min-height: 80vh;
  padding: 50px 20px;
  margin: 50px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .titleContainer {
    /* flex-direction: column;
    justify-content: center; */
  }
  .buttonContainer {
    display: flex;
  }

  .imageContainer {
    /* border: 2px solid #aaa;
    border-radius: 4px; */

    max-width: 500px;
    min-width: 300px;
    min-height: 40vh;

    margin: 50px auto;
    & img {
      width: 100%;
      height: 40vh;
      object-fit: contain;
    }
  }

  .textContainer {
    border: 2px solid #aaa;
    border-radius: 4px;

    max-width: 500px;
    min-width: 300px;
    min-height: 20vh;
    padding: 50px 20px;
    margin: 50px auto;
  }
`;
