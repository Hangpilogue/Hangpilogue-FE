////src/components/posts/DetailPost

import styled from "styled-components";

import Button from "../common/Button";


import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts, deletePosts } from "../../redux/modules/postSlice";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function DetailPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams(); // 게시물 ID받아오기
  const [detailList, setDetailList] = useState([]);

  const getDetail = async () => {
    const data = await axios.get(`http://taesik.shop/api/posts/${postId}`);
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
  //게시물삭제버튼

  const onClickDeleteButton = () => {
    dispatch(deletePosts(postId)).then((res)=> {
      console.log(res)
    })
    alert("게시물이 삭제되었습니다.");
    navigate(-1, { replace: false });
  };

  return (
    <>
      <DetailLayout>
        <div className="container">
          <div className="titleContainer">
            <div className="titleContainerWrapper">
              <h1> {detailList.title} </h1>
              <span> 작성자 : {detailList.nickname} </span>
            </div>
          </div>
          <div className="buttonContainer">
            <span> {postId}번째 게시물 </span>
            <div className="buttonContainerWrapper">
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
        </div>

        <div className="imageContainer">
          <div>
            <img src={detailList.img} alt="?"/>
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
  .container {
    border: 1px solid #eee;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .titleContainer {
    font-size: 18px;
    color: #777;
    font-weight: 700;
  }

  .titleContainerWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
  }

  .buttonContainer {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .buttonContainerWrapper {
    display: flex;
    & button {
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .imageContainer {

    /* border: 2px solid #aaa;
    border-radius: 4px; */

    border: 1px solid #eee;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 20px;
    margin-bottom: 20px;


    width: 100%;
    min-height: 40vh;
    border-radius: 5px;
    overflow: hidden;
    & img {
      width: 100%;
      height: 40vh;
      object-fit: contain;
    }
  }

  .textContainer {

    border: 1px solid #eee;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 4px;
    height: 180px;
  }
`;
