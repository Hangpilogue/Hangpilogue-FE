////src/components/posts/DetailPost

import styled from "styled-components";

import Button from "../common/Button";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getDetail } from "../../redux/modules/detailSlice";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function DetailPost() {
  // const { id, title, content, nickname, img } = props.detail;
  // console.log(title)

  // const dispatch = useDispatch();
  // const Detail = useSelector( state => state )
  // console.log(Detail.title)
  const navigate = useNavigate();
  const [loadedImg, setLoadedImg] = useState();
  // const [ detail, setDetail ] = useState([]);

  const { postId } = useParams(); // 게시물 ID받아오기
  // console.log(postId)
  const [detail, setDetail] = useState();
  // console.log(detail);

  const getDetail = async () => {
    const data = await axios.get(`http://localhost:4000/posts/${postId}`);
    // console.log(data.data);
    setDetail(data.data);
    setLoadedImg(data.data.img);
  };

  useEffect(() => {
    getDetail();
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
            <span> {detail?.title} </span>
            <span> {detail?.nickname} </span>
            <span> {detail?.id} </span>
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
            <img src={loadedImg} alt="?" />
          </div>
        </div>
        <div className="textContainer">
          <div>{detail?.content} </div>
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
