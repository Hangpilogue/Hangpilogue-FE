//src/components/posts/Comment

import styled from "styled-components";
import Button from "../common/Button";

import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { editPosts } from "../../redux/modules/postSlice";
import { deleteComment } from "../../redux/modules/commentSlice";

function Comment() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const commentData = useSelector((state) => state.commentSlice);
  const [inputValue, setInputValue] = useState("");
  const [editComment, setEditComment] = useState(false);
  const navigate = useNavigate();
  const [commentList, setCommentList] = useState([]);
  const commentId = useParams();

  const getDetail = async () => {
    const data = await axios.get(`http://taesik.shop/api/posts/${postId}`);
    setCommentList(data.data.postone.Comments);
  };

  useEffect(() => {
    getDetail();
    // console.log("첫 렌더링?시");
    // return () => {
    //   getDetail();
    // };
  }, []); //commentList 쓰면 바로붙긴한데 페이지무한로딩걸림

  const onClickCommentDeleteButton = () => {
    dispatch(deleteComment(commentId));
  };

  const onClickCommentEditButton = () => {
    dispatch(editPosts({}));
  };

  return (
    <>
      <StCommentList>
        {commentList.map((data, i) => (
          <div className="containerBox" key={i}>
            <div className="contentBox">
              <div>{data.nickname}:</div>
              <div>{data.content}</div>
            </div>

            <div className="buttonBox">
              <Button
                type="button"
                buttonText={"수정하기"}
                action={onClickCommentEditButton}
              />
              <Button
                type="button"
                buttonText={"삭제하기"}
                action={onClickCommentDeleteButton}
              />
            </div>
          </div>
        ))}
      </StCommentList>
    </>
  );
}

export default Comment;

const StCommentList = styled.div`
  height: 350px;
  overflow: auto;
  margin: 50px;

  display: flex; //블럭속성을 풀어줌
  flex-direction: column; //세로정렬

  .containerBox {
    display: flex;
    justify-content: space-between; //코멘트와 버튼 사이를 벌려줌
    padding: 20px;
  }

  .contentBox {
    display: flex;
  }

  .buttonBox {
    display: flex;
  }
`;
