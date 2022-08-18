////src/components/posts/DetailPost

import styled from "styled-components";

import Button from "../common/Button";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getDetail } from "../../redux/modules/detailSlice";
import { getPosts, deletePosts } from "../../redux/modules/postSlice";
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
  // console.log(postList);
  const [detailList, setDetailList] = useState([]);
  // console.log(detailList);

  const getDetail = async () => {
    const data = await axios.get(`http://taesik.shop/api/posts/${postId}`);
    // console.log(data);
    setDetailList(data.data.postone);
  };

  useEffect(() => {
    dispatch(getPosts(postId));
    getDetail();
  }, []);

  //EditPage로 이동
  const onClickEditButton = () => {
    navigate(`/edit/${postId}`);
  };

  const onClickDeleteButton = () => {
    dispatch(deletePosts(postId));
    navigate(-1, { replace: false });
  };

  return (
    <>
      <DetailLayout>
        <div className="container">
          <div className="titleContainer">
            <h1> {detailList.title} </h1>
            <span> 작성자 : {detailList.nickname} </span>
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
            <img src={detailList.img} alt="?" />
          </div>
        </div>
        <div className="textContainer">
          <div>{detailList.content} </div>
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
