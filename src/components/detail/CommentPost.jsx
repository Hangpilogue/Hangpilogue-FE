//src/components/posts/CommentPost

import {useEffect, useRef, useState} from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getComment,
  postComment,
  editComment,
  deleteComment,
} from "../../redux/modules/commentSlice";

import styled from "styled-components";
import Button from "../common/Button";
import InputBox from "../common/InputBox";

function CommentPost() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const {commentInput} = useRef()

  const [content, setContent] = useState("");

  const onChangeComment = (e) => {
    // const comment = e.target.value;
    setContent(e.target.value);
    // console.log(e.target.value);
  };

  useEffect(() => {
    // console.log("useEffect");
  }, []);

  const onClickAddComment = (e) => {
    e.preventDefault();

    if (content === "") {
      return alert("내용을 입력해주세요.");
    }
    // console.log(postId);
    // console.log(content);
    dispatch(postComment({ postId, content }));
    setContent("");
    dispatch(getComment());
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
  /* background-color: aliceblue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-direction: row; */

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
