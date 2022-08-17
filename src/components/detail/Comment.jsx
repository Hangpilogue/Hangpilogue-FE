//src/components/posts/Comment

import styled from "styled-components";

import InputBox from "../common/InputBox";
import Button from "../common/Button";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getPosts,
  deletePosts,
  editPosts,
  postPosts,
} from "../../redux/modules/postSlice";

// import { _getCommentPostList } from "../../redux/modules/commentSlice";

function Comment() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const commentData = useSelector((state) => state.commentSlice); //state.commentSlice => initialstate값을 가져온다
  console.log(...commentData); //초기값이 빈 값이 나온다/slice에 초기값이 비었기 때문 (정상)
  const [inputValue, setInputValue] = useState("");
  const [editComment, setEditComment] = useState("");

  useEffect(() => {
    dispatch(getPosts(postId)); // get요청이 성공하면,commentSlice 리듀서로 인해 innitailState에 값이 들어간다.
    //그 뒤에 18번째 줄 commentData에 찍힌다.
    console.log("useEffect");
  }, []);

  const onClickCommentDeleteButton = () => {
    dispatch(deletePosts()); //작성자id랑 코멘트작성자id같아야함
  };

  const onClickCommentEditButton = () => {
    dispatch(
      editPosts({
        // id: comment.postId, //코멘트작성자id
        // content: editComment,
        // username: comment.nickname, //코멘트작성자id
        // postId: postId,
      })
    );
  };

  return (
    <>
      <StCommentList>
        {/* {data?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))} */}
        {[...commentData]?.map(
          // map함수는 배열에만 돌릴 수 있다. => []해주고 스프레드 문법
          (data) => (
            <div>
              <div className="contentBox">
                <div>작성자 :{data.nickname}</div>
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
          )
        )}
      </StCommentList>
    </>
  );
}

export default Comment;

const StCommentList = styled.div`
  background-color: aliceblue;
  height: 350px;
  overflow: auto;

  display: flex; //블럭속성을 풀어줌
  flex-direction: column; //세로정렬

  .contentBox {
    justify-content: space-between;
  }

  /* .buttonBox {
    overflow: hidden;
  } */
`;
