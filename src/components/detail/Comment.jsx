//src/components/posts/Comment

import styled from "styled-components";

import InputBox from "../common/InputBox"
import Button from "../common/Button";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function Comment() {

  const commentData = useSelector( state =>  state.comment);
  const dispatch = useDispatch();
  const commentInput = useRef();


  const onclickAddComment = () => {
    
  }

  return (
      <>
        <CommentLayout>
            <InputBox
            name={"comment"}
            placeholder={"댓글 내용"}
            max={100}
            required
            // ref={commentInput}
            />
            <div>
            <Button 
            type="button"
            buttonText={"댓글달기"}
            action={onclickAddComment}
            />
            </div>
            {/* <div>
              {commentData?.map((item) =? {
                return {...item, mode:"read"}
              }).map(item) => {
                return <CommentPost item={item} setRefresh={setRefresh} refresh={refresh} />
              }
            </div> */}
        </CommentLayout>
      </>
  );
};



export default Comment;



const CommentLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 800px;
    min-width: 500px;
    min-height: 10vh;
    padding: 10px 10px;
    margin:  50px;

`;