//src/components/posts/CommentPost

import { useEffect, useState } from "react";
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

  const [comment, setComment] = useState("");

  const onChangeComment = (e) => {
    // const comment = e.target.value;
    setComment(e.target.value);
    // console.log(e.target.value);
  };

  useEffect(() => {
    // console.log("useEffect");
  }, []);

  const onClickAddComment = (e) => {
    e.preventDefault();

    if (comment.content === "") {
      return alert("내용을 입력해주세요.");
    }
    // console.log(postId);
    // console.log(comment);
    dispatch(postComment({ postId, comment }));
    setComment("");
  };

  return (
    <>
      <StCommentLayout>
        <InputBox
          name="content"
          placeholder={"댓글 내용( 100자 이내 )"}
          max={100}
          required
          value={comment.content}
          onChange={onChangeComment}
        />

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
  justify-content: center;
  align-items: center;
  /* flex-direction: row; */

  max-width: 800px;
  min-width: 500px;
  min-height: 10vh;
  padding: 10px 10px;
  margin: 50px 50px 20px 50px;
`;
