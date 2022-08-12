import styled from "styled-components";
import {RESP} from "../Mock/response";

function PostPage() {
  const resp = RESP
  console.log(resp)

  return (
    <StPostPage>
      <StWrapper>
        <StPostTitle>
          <label htmlFor={"title"}>게시글 제목</label>
          <input id={"title"} type="text"/>
        </StPostTitle>
        <StPostImage>
          <StPostImageBox/>
          <input id={"uploadImg"} value={"첨부파일"} placeholder={"첨부파일"}/>
          <label htmlFor={"img"}>파일찾기</label>
          <input id={"img"} type="file" placeholder={""}/>
        </StPostImage>
        <StPostContent>
          <label htmlFor={"content"}>게시글 내용</label>
          <textarea id={"content"} placeholder={"후기를 남겨주세요!"}></textarea>
        </StPostContent>
        <StBtnBox>
          <StBtn color={"green"}>완료</StBtn>
          <StBtn color={"red"}>취소</StBtn>
        </StBtnBox>
      </StWrapper>
    </StPostPage>
  );
};

const StOutline = styled.div`
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  & label {
    font-size: 18px;
    color: #777;
    font-weight: 700;
    padding-left: 10px;
  }
`

const StPostPage = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
`

const StWrapper = styled.div`
  width: 60%;
`

const StPostTitle = styled(StOutline)`
  display: flex;
  flex-direction: column;

  & input {
    height: 40px;
    padding: 0 10px;
    vertical-align: middle;
    border: none;
    border-bottom: 1px solid #dddddd;
    margin-top: 10px;

    &:active {
      outline: none;
    }

    &:focus {
      outline: none;
    }
  }
`

const StPostImage = styled(StOutline)`
  margin-bottom: 10px;

  & #uploadImg {
    height: 40px;
    padding: 0 10px;
    vertical-align: middle;
    border: 1px solid #dddddd;
    width: calc(100% - 109px);
    color: #999999;
    border-radius: 5px;

    &:active {
      outline: none;
    }

    &:focus {
      outline: none;
    }
  }

  & label {
    padding: 9px 20px;
    color: #fff;
    font-size: 16px;
    vertical-align: middle;
    background-color: #999999;
    cursor: pointer;
    height: 40px;
    margin-left: 10px;
    border-radius: 5px;
  }

  & #img {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
    display: none;
  }
`

const StPostImageBox = styled.div`
  height: 300px;
  background-color: #7070c1;
  margin-bottom: 10px;
  border-radius: 5px;
`

const StPostContent = styled(StOutline)`

  & textarea {
    margin-top: 10px;
    width: 100%;
    height: 150px;
    border: none;
    resize: none;
    padding: 10px;

    &:active {
      outline: none;
    }

    &:focus {
      outline: none;
    }
  }
`

const StBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`

const StBtn = styled.button`
  width: 50%;
  border: none;
    //background-color: ${(props) => props.color};
  background-color: #7070c1;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;

  &:first-child {
    margin-right: 10px;
  }
`

export default PostPage;