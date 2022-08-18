//src/components/posts/CommentPost

import {useEffect, useRef, useState} from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { postComment } from "../../redux/modules/commentSlice";

import styled from "styled-components";
import Button from "../common/Button";

function CommentPost() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const [content, setContent] = useState("");
  const commentInput = useRef();

  const onChangeComment = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {}, []);

  const onClickAddComment = (e) => {
    e.preventDefault();
    if (content === "") {
      return alert("내용을 입력해주세요.");
    }
    //댓글달기 인풋창이 빈 값일 때는 내용입력요청 알림창 뜨기
    dispatch(postComment({ postId, content }));
    setContent("");
    commentInput.current.value = ""; // 댓글달기를 완료하면 인풋값 없애기
  };

  return (
    <>
      <StCommentLayout>
        <StInput
          required
          maxLength={100}
          placeholder={"댓글 내용( 100자 이내 )"}
          onChange={onChangeComment}
          ref={commentInput}
        ></StInput>
        <div>
          <Button
            type="button"
            buttonText={"댓글달기"}
            action={onClickAddComment}
          />
        </div>
      </StCommentLayout>
    </>
  );
}

export default CommentPost;

const StCommentLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #eee;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px;
  margin-bottom: 20px;
`;

const StInput = styled.input`
  padding: 10px 10px;
  flex: 1;
  outline: none;
  border: none;
`;
